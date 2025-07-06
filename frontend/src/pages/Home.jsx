import { Link } from "react-router";
import { ArrowRight, AudioWaveform, FolderOpen, MessageCircle, Sparkles  } from "lucide-react";
import { useState, useEffect } from "react";
import api from "../lib/axios";

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            // Prevent multiple auth checks
            if (authChecked) return;

            try {
                // Make API call - cookies will be sent automatically
                const response = await api.get("/users/profile");
                setIsLoggedIn(response.status === 200);
            } catch (error) {
                console.log("User not authenticated");
                setIsLoggedIn(false);
            } finally {
                setAuthChecked(true);
            }
        };
        
        checkAuth();
    }, [authChecked]);

            return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Hero Section */}
            <div className="text-center py-16">
                <div className="mb-8">
                    <AudioWaveform className="size-20 text-primary mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Access Your Speech Resources-
                        <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent"> Instantly </span>
                       
                    </h1>
                    <p className="text-xl text-base-content/70 max-w-2xl mx-auto mb-8">
                    Access your speech resources from anywhere—in minutes.
                    </p>
                    {isLoggedIn ? (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/dashboard" className="btn btn-primary btn-lg">
                                Go to Dashboard
                            </Link>
                        </div>
                    ) : (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/register" 
                            className="btn btn-primary btn-lg"
                        >
                            Get Started Free
                            <ArrowRight className="size-5 ml-2" />
                        </Link>
                        <Link 
                            to="/login" 
                            className="btn btn-outline btn-lg"
                        >
                            Sign In
                        </Link>
                    </div>
                    )}
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose Speech Vault?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <FolderOpen className="size-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Centralized Hub</h3>
                        <p className="text-base-content/70">
                        Store all your therapy resources—PDFs, videos, and activities—in one organized, searchable location accessible from anywhere.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <MessageCircle className="size-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">AI Chat</h3>
                        <p className="text-base-content/70">
                        Chat directly with your uploaded PDFs and resources to instantly find relevant information and generate therapy ideas.                        </p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <Sparkles className="size-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Smart Generation</h3>
                        <p className="text-base-content/70">
                        Automatically create unlimited conversation starters, role-play scenarios, and social communication exercises tailored to your students.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 text-center">
                <div className="bg-accent rounded-2xl p-8 max-w-2xl mx-auto">
                    <h2 className="text-2xl text-accent-content font-bold mb-4">
                    Ready to Transform Your Therapy Sessions?
                    </h2>
                    <p className="text-accent-content/70 mb-6">
                    Start organizing your resources and creating engaging social communication activities today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/register" 
                            className="btn btn-primary"
                        >
                            Start Your Free Trial
                        </Link>
                        <Link 
                            to="/login" 
                            className="btn"
                        >
                            Sign Into Your Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;