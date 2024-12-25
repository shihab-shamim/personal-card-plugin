import { __ } from '@wordpress/i18n';

import { PanelBody, SelectControl } from '@wordpress/components';
import { purposeTypeOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import { TextControl } from '@wordpress/components';
import { TextareaControl } from '@wordpress/components';
import { ToggleControl,IconButton } from '@wordpress/components';
import {MediaUpload} from "@wordpress/block-editor"


const General = ({ attributes, setAttributes }) => {
  
  const { purposeType ,name,passsionate,about,company,social,target,Profile} = attributes;
  

  return (
   <>
    <PanelBody className='bPlPanelBody' title={__('Profile-image', 'b-blocks')} initialOpen={false}>
    <MediaUpload
					onSelect={(media) => setAttributes({ Profile: media.url })}
					type="image"
					value={Profile}
					render={({ open }) => (
						<IconButton
							onClick={open}
							icon="upload"
							className="editor-media-placeholder_button is-button is-default is-large"
						>
							Upload a Photo
						</IconButton>
					)}
				/>  
      
      </PanelBody>
    <PanelBody className='bPlPanelBody' title={__('Name', 'b-blocks')} initialOpen={false}>
      <TextControl label="Name" placeholder='type name' value={name} onChange={(name)=>setAttributes({name:name})}></TextControl>
      
      </PanelBody>
    <PanelBody className='bPlPanelBody' title={__('Passion', 'b-blocks')} initialOpen={false}>
      <TextControl label="Passion" placeholder='type about' value={passsionate} onChange={(passion)=>setAttributes({passsionate:passion})} ></TextControl>

      
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Company', 'b-blocks')} initialOpen={false}>
      <TextControl label="Company" value={company} rnChange={(com)=>setAttributes({company:com})}></TextControl>
      
      </PanelBody>
   


    <PanelBody className='bPlPanelBody' title={__('About', 'b-blocks')} initialOpen={false}>
      <TextareaControl label="About" value={about} rows={6} onChange={(ab)=>setAttributes({about:ab})}></TextareaControl>
      
      </PanelBody>
    <PanelBody className='bPlPanelBody' title={__('Social', 'b-blocks')} initialOpen={false}>
      <ToggleControl label="Show social icon" checked={social} onChange={ (e) => setAttributes({social:e})}></ToggleControl>

     {social &&  <ToggleControl className='new-tab' label="New Tab" checked={target} onChange={ (e) => setAttributes({target:e})}></ToggleControl>

     }
     

      
      </PanelBody>
  
   </>
  )
}

export default General