import SectionTitle from '../sectionTitle/section-title'
import './information.scss'

export default function Info() {
    return (
        <div className="infos">
            <SectionTitle title="Languages" />
            <div className="languages-info">
                <span> 🇧🇷 PT-BR - Native Speaker</span>
            </div>
            <SectionTitle title="Education" />
            <div className="educational-info">
                <span>🎓 </span>
                <span>
                    Internet Systems - Federal Institute of Paraíba
                </span>
            </div>
        </div>
    );
}