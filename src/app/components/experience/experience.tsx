import Image from 'next/image';
import SectionTitle from '../sectionTitle/section-title';
import './experience.scss';

export default function Experience() {
    return (
        <div className="experience">
            <SectionTitle title="Experience" />
            <p>
                3 years in the world of Software Development, working with technologies such as React, Node, Postgres, Next, Typescript, Javascript, HTML, CSS, Styled Components, Git, among others.
            </p>
            <div className="experience-time">
                <div className='experience-language'>
                    <Image
                        src="/images/js.png"
                        alt="JavaScript"
                        width={40}
                        height={40}
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-3">
                            <span>3 years</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image
                        src="/images/react.png"
                        alt="React"
                        width={40}
                        height={40}
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image
                        src="/images/ts.png"
                        alt="TypeScript"
                        width={40}
                        height={40}
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>
                <div className='experience-language'>
                    <Image
                        src="/images/java.png"
                        alt="Java"
                        width={40}
                        height={40}
                    />
                    <div className="experience-unit">
                        <div className="experience-measure measure-2">
                            <span>2 years</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}