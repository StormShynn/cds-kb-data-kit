---
name: I_REOBJECTTYPE
description: "Reobjecttype"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_REOBJECTTYPE

**Reobjecttype**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateObjectType` | ✓ | |  | `cast(obart as recaobjtype preserving type )` |  |  |
| `SemanticObject` |  | |  | `cast (case obart when 'IS' then 'REContract' when 'I3' then 'REContract' when 'I6' then 'REContract' when 'IW' then 'REMasterData' when 'IB' then 'REMasterData' when 'IG' then 'REMasterData' when 'IM' then 'REMasterData' when 'I0' then 'REMasterData' when 'I5' then 'REMasterData' when 'I2' then 'REThirdParty' when 'I8' then 'RELandUse' when 'I9' then 'RELandUse' when 'J1' then 'RELandUse' when 'I1' then 'REServiceCharge' when 'I4' then 'REServiceCharge' when 'J5' then 'RealEstateIntegrationObject' when 'AN' then 'FixedAsset' when 'KS' then 'CostCenter' when 'PR' then 'WBSElement' when 'OR' then 'InternalOrder' when 'IE' then 'Equipment' when 'IF' then 'FunctionalLocation' else '' end as char40 )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REObjectTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IREOBJTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #CHECK
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Real Estate Object Type'
@ObjectModel.representativeKey: 'RealEstateObjectType'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'RealEstateObjectType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.compositionRoot: true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #EXTRACTION_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY ]
@Analytics:{
    dataExtraction: {
        enabled: true
    }
}
define view I_REObjectType
  as select from tbo00
  association [0..*] to I_REObjectTypeText as _Text on $projection.RealEstateObjectType = _Text.RealEstateObjectType
  //association [0..1] to tivcaobjtype as _tivcaobjtype on $projection.RealEstateObjectType = _tivcaobjtype.objtype
{
      @ObjectModel.text.association: '_Text'
  key cast(obart as recaobjtype preserving type ) as RealEstateObjectType,
      cast (case obart 
      when 'IS' then 'REContract'   //Contract 
      when 'I3' then 'REContract'   //Search Request  
      when 'I6' then 'REContract'   //Offered Object      
      
      when 'IW' then 'REMasterData' //Business Entity
      when 'IB' then 'REMasterData' //Building
      when 'IG' then 'REMasterData' //Property
      when 'IM' then 'REMasterData' //Rental Object
      when 'I0' then 'REMasterData' //Architectural Object
      when 'I5' then 'REMasterData' //Offered Object
      
      when 'I2' then 'REThirdParty' //Mandate
      
      when 'I8' then 'RELandUse'    //Parcel of Land
      when 'I9' then 'RELandUse'    //Public register
      when 'J1' then 'RELandUse'    //Notice of Assessment
      
      when 'I1' then 'REServiceCharge' //Settlement Unit
      when 'I4' then 'REServiceCharge' //Participation Group
      
      when 'J5' then 'RealEstateIntegrationObject'
      
      when 'AN' then 'FixedAsset'
      when 'KS' then 'CostCenter'
      when 'PR' then 'WBSElement'
      when 'OR' then 'InternalOrder'
      when 'IE' then 'Equipment'
      when 'IF' then 'FunctionalLocation'
      else '' 
      end as char40 ) as SemanticObject,
      
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
      
      //,
      //_tivcaobjtype
}
```
