import Wrap from '@/components/common/template/Wrap';
import SignUpForm from '@/components/_account/SignUpForm';

export default function SignUpPage() {
    return (
        <Wrap>
            <div className="flex flex-col justify-center py-6 sm:py-12 px-6 lg:px-8">
                <div className="sm:w-full sm:max-w-3xl sm:mx-auto mb-14 space-y-6">
                    <h2 className="text-2xl font-semibold uppercase">
                        Become a my store member
                    </h2>
                    <p className="text-sm">
                        Create your My Store Member profile, and get access to
                        an enhanced shopping experience.
                    </p>
                </div>
                <SignUpForm />
            </div>
        </Wrap>
    );
}
