---
name: I_INSPSPECCATALOG
description: "Inspspeccatalog"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECCATALOG

**Inspspeccatalog**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionSpecificationPlant` | ✓ | |  |  |  |  |
| `InspectionSpecification` | ✓ | |  |  |  |  |
| `InspectionSpecificationVersion` | ✓ | |  |  |  |  |
| `InspSpecAddlCatalogFieldGroup` | ✓ | |  | `1` |  |  |
| `InspSpecAdditionalCatalog` |  | |  | `cast( '1' as qkatausw )` |  |  |
| `InspSpecAdditionalSelectedSet` |  | |  | `SelectedCodeSet` |  |  |
| `InspSpecAdditionalCodeGroup` |  | |  | `cast( '' as qcgrausw )` |  |  |
| `InspSpecAddlSeldCodeSetPlant` |  | |  | `SelectedCodeSetPlant` |  |  |
| `_InspectionSpecificationPlant` | | ✓ | | | | |
| `_InspectionSpecification` | | ✓ | | | | |
| `_InspSpecificationVersion` | | ✓ | | | | |
| `_InspSpecAddlCatalog` | | ✓ | | | | |
| `_InspSpecAddlSelectedSet` | | ✓ | | | | |
| `_InspSpecAddlCodeGroup` | | ✓ | | | | |
| `_InspSpecAddlSeldCodeSetPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionSpecificationPlant` | `I_Plant` | [1..1] |
| `_InspectionSpecification` | `I_InspectionSpecification` | [1..1] |
| `_InspSpecificationVersion` | `I_InspSpecificationVersion` | [1..1] |
| `_InspSpecAddlCatalog` | `I_Inspectioncatalog` | [1..1] |
| `_InspSpecAddlSelectedSet` | `I_InspectionSelectedSet` | [1..1] |
| `_InspSpecAddlCodeGroup` | `I_InspectionCodeGroup` | [1..1] |
| `_InspSpecAddlSeldCodeSetPlant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'IINSPSPECCAT',
    preserveKey: true,
    compiler.compareFilter: true
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_InspectionSpecification']
@EndUserText.label: 'Assignment of Catalogs to Master Charc'
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: {
    dataClass: #MASTER,
    sizeCategory: #M, //expected number of rows < 100.000
    serviceQuality: #C // includes A,B as well
}
@ObjectModel.representativeKey: 'InspSpecAddlCatalogFieldGroup'
@Metadata.ignorePropagatedAnnotations: true

define view I_InspSpecCatalog 
    as select from I_AssgmtInspMethInspSpec

  association [1..1] to I_Plant as _InspectionSpecificationPlant
    on $projection.InspectionSpecificationPlant = _InspectionSpecificationPlant.Plant
    
  association [1..1] to I_InspectionSpecification as _InspectionSpecification
    on     $projection.InspectionSpecificationPlant = _InspectionSpecification.InspectionSpecificationPlant
       and $projection.InspectionSpecification      = _InspectionSpecification.InspectionSpecification
       
  association [1..1] to I_InspSpecificationVersion as _InspSpecificationVersion
    on     $projection.InspectionSpecificationPlant   = _InspSpecificationVersion.InspectionSpecificationPlant
       and $projection.InspectionSpecification        = _InspSpecificationVersion.InspectionSpecification
       and $projection.InspectionSpecificationVersion = _InspSpecificationVersion.InspectionSpecificationVersion
       
  association [1..1] to I_Inspectioncatalog as _InspSpecAddlCatalog
    on $projection.InspSpecAdditionalCatalog = _InspSpecAddlCatalog.InspectionCatalog
    
  association [1..1] to I_InspectionSelectedSet as _InspSpecAddlSelectedSet
    on     $projection.InspSpecAdditionalCatalog     = _InspSpecAddlSelectedSet.InspectionCatalog
       and $projection.InspSpecAdditionalSelectedSet = _InspSpecAddlSelectedSet.SelectedCodeSet
       and $projection.InspSpecAddlSeldCodeSetPlant  = _InspSpecAddlSelectedSet.SelectedCodeSetPlant

  association [1..1] to I_InspectionCodeGroup as _InspSpecAddlCodeGroup
    on     $projection.InspSpecAdditionalCatalog   = _InspSpecAddlCodeGroup.InspectionCatalog
       and $projection.InspSpecAdditionalCodeGroup = _InspSpecAddlCodeGroup.InspectionCodeGroup
       
  association [1..1] to I_Plant as _InspSpecAddlSeldCodeSetPlant
    on $projection.InspSpecAddlSeldCodeSetPlant = _InspSpecAddlSeldCodeSetPlant.Plant

{
   @ObjectModel.foreignKey.association: '_InspectionSpecificationPlant'
   @EndUserText.label: 'Master Characteristic Plant'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationPlant,
   @ObjectModel.foreignKey.association: '_InspectionSpecification'
   @EndUserText.label: 'Master Characteristic'
   key I_AssgmtInspMethInspSpec.InspectionSpecification,
   @ObjectModel.foreignKey.association: '_InspSpecificationVersion'
   @EndUserText.label: 'Master Characteristic Version'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationVersion,
   /* Define artifical counter for the additional catalog data.  */
   /* - must be KEY because otherwise each result line of this CDS has the same key for one "unionized" up to four results    */
   /* - this key shall be used for UPDATE; the counter key is related directly to the corresponding DB fields which ends with */
   /*   the same counter number;                                                                                              */
   @EndUserText.label: 'Additional Catalog Field Group'
   key 1 as InspSpecAddlCatalogFieldGroup,

   @ObjectModel.foreignKey.association: '_InspSpecAddlCatalog'
   cast( '1' as qkatausw )                                  as InspSpecAdditionalCatalog,  // 1 is the _only_ possible value for the field qpmz.katalgart1 at the DB!
   @ObjectModel.foreignKey.association: '_InspSpecAddlSelectedSet'
   I_AssgmtInspMethInspSpec.SelectedCodeSet                 as InspSpecAdditionalSelectedSet,
   @ObjectModel.foreignKey.association: '_InspSpecAddlCodeGroup'
   cast( '' as qcgrausw )                                   as InspSpecAdditionalCodeGroup, // SelectedCodeSet is mandatory for catalog 1, hence the CodeGroup is empty
   @ObjectModel.foreignKey.association: '_InspSpecAddlSeldCodeSetPlant'
   I_AssgmtInspMethInspSpec.SelectedCodeSetPlant            as InspSpecAddlSeldCodeSetPlant,
   
   /* Associations */
   _InspectionSpecificationPlant,
   _InspectionSpecification,
   _InspSpecificationVersion,
   _InspSpecAddlCatalog,
   _InspSpecAddlSelectedSet,
   _InspSpecAddlCodeGroup,
   _InspSpecAddlSeldCodeSetPlant
   
}
where not I_AssgmtInspMethInspSpec.SelectedCodeSet = ' ' 
  and I_AssgmtInspMethInspSpec.InspectionMethod = ' '
  
union select from I_AssgmtInspMethInspSpec
          
  association [1..1] to I_Plant as _InspectionSpecificationPlant
    on $projection.InspectionSpecificationPlant = _InspectionSpecificationPlant.Plant
    
  association [1..1] to I_InspectionSpecification as _InspectionSpecification
    on     $projection.InspectionSpecificationPlant = _InspectionSpecification.InspectionSpecificationPlant
       and $projection.InspectionSpecification      = _InspectionSpecification.InspectionSpecification
       
  association [1..1] to I_InspSpecificationVersion as _InspSpecificationVersion
    on     $projection.InspectionSpecificationPlant   = _InspSpecificationVersion.InspectionSpecificationPlant
       and $projection.InspectionSpecification        = _InspSpecificationVersion.InspectionSpecification
       and $projection.InspectionSpecificationVersion = _InspSpecificationVersion.InspectionSpecificationVersion
       
  association [1..1] to I_Inspectioncatalog as _InspSpecAddlCatalog
    on $projection.InspSpecAdditionalCatalog = _InspSpecAddlCatalog.InspectionCatalog
    
  association [1..1] to I_InspectionSelectedSet as _InspSpecAddlSelectedSet
    on $projection.InspSpecAdditionalCatalog         = _InspSpecAddlSelectedSet.InspectionCatalog
       and $projection.InspSpecAdditionalSelectedSet = _InspSpecAddlSelectedSet.SelectedCodeSet
       and $projection.InspSpecAddlSeldCodeSetPlant  = _InspSpecAddlSelectedSet.SelectedCodeSetPlant

  association [1..1] to I_InspectionCodeGroup as _InspSpecAddlCodeGroup
    on     $projection.InspSpecAdditionalCatalog   = _InspSpecAddlCodeGroup.InspectionCatalog
       and $projection.InspSpecAdditionalCodeGroup = _InspSpecAddlCodeGroup.InspectionCodeGroup

  association [1..1] to I_Plant as _InspSpecAddlSeldCodeSetPlant
    on $projection.InspSpecAddlSeldCodeSetPlant = _InspSpecAddlSeldCodeSetPlant.Plant
    
{
   @ObjectModel.foreignKey.association: '_InspectionSpecificationPlant'
   @EndUserText.label: 'Master Characteristic Plant'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationPlant,
   @ObjectModel.foreignKey.association: '_InspectionSpecification'
   @EndUserText.label: 'Master Characteristic'
   key I_AssgmtInspMethInspSpec.InspectionSpecification,
   @ObjectModel.foreignKey.association: '_InspSpecificationVersion'
   @EndUserText.label: 'Master Characteristic Version'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationVersion,
   /* Define artifical counter for the additional catalog data.  */
   /* - must be KEY because otherwise each result line of this CDS has the same key for one "unionized" up to four results    */
   /* - this key shall be used for UPDATE; the counter key is related directly to the corresponding DB fields which ends with */
   /*   the same counter number;                                                                                              */
   @EndUserText.label: 'Additional Catalog Field Group'
   key 2 as InspSpecAddlCatalogFieldGroup,

   @ObjectModel.foreignKey.association: '_InspSpecAddlCatalog'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalCatalog2      as InspSpecAdditionalCatalog,
   @ObjectModel.foreignKey.association: '_InspSpecAddlSelectedSet'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalSelectedSet2  as InspSpecAdditionalSelectedSet,
   @ObjectModel.foreignKey.association: '_InspSpecAddlCodeGroup'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalCodeGroup2    as InspSpecAdditionalCodeGroup,
   @ObjectModel.foreignKey.association: '_InspSpecAddlSeldCodeSetPlant'
   I_AssgmtInspMethInspSpec.InspSpecAddlSeldCodeSetPlant2   as InspSpecAddlSeldCodeSetPlant,
   
   /* Associations */
   _InspectionSpecificationPlant,
   _InspectionSpecification,
   _InspSpecificationVersion,
   _InspSpecAddlCatalog,
   _InspSpecAddlSelectedSet,
   _InspSpecAddlCodeGroup,
   _InspSpecAddlSeldCodeSetPlant
   
}
where not I_AssgmtInspMethInspSpec.InspSpecAdditionalCatalog2 = ' ' 
  and I_AssgmtInspMethInspSpec.InspectionMethod = ' '
  
union select from I_AssgmtInspMethInspSpec

  association [1..1] to I_Plant as _InspectionSpecificationPlant
    on $projection.InspectionSpecificationPlant = _InspectionSpecificationPlant.Plant
    
  association [1..1] to I_InspectionSpecification as _InspectionSpecification
    on     $projection.InspectionSpecificationPlant = _InspectionSpecification.InspectionSpecificationPlant
       and $projection.InspectionSpecification      = _InspectionSpecification.InspectionSpecification
       
  association [1..1] to I_InspSpecificationVersion as _InspSpecificationVersion
    on     $projection.InspectionSpecificationPlant   = _InspSpecificationVersion.InspectionSpecificationPlant
       and $projection.InspectionSpecification        = _InspSpecificationVersion.InspectionSpecification
       and $projection.InspectionSpecificationVersion = _InspSpecificationVersion.InspectionSpecificationVersion
       
  association [1..1] to I_Inspectioncatalog as _InspSpecAddlCatalog
    on $projection.InspSpecAdditionalCatalog = _InspSpecAddlCatalog.InspectionCatalog
    
  association [1..1] to I_InspectionSelectedSet as _InspSpecAddlSelectedSet
    on $projection.InspSpecAdditionalCatalog         = _InspSpecAddlSelectedSet.InspectionCatalog
       and $projection.InspSpecAdditionalSelectedSet = _InspSpecAddlSelectedSet.SelectedCodeSet
       and $projection.InspSpecAddlSeldCodeSetPlant  = _InspSpecAddlSelectedSet.SelectedCodeSetPlant

  association [1..1] to I_InspectionCodeGroup as _InspSpecAddlCodeGroup
    on     $projection.InspSpecAdditionalCatalog   = _InspSpecAddlCodeGroup.InspectionCatalog
       and $projection.InspSpecAdditionalCodeGroup = _InspSpecAddlCodeGroup.InspectionCodeGroup

  association [1..1] to I_Plant as _InspSpecAddlSeldCodeSetPlant
    on $projection.InspSpecAddlSeldCodeSetPlant = _InspSpecAddlSeldCodeSetPlant.Plant
               
{
   @ObjectModel.foreignKey.association: '_InspectionSpecificationPlant'
   @EndUserText.label: 'Master Characteristic Plant'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationPlant,
   @ObjectModel.foreignKey.association: '_InspectionSpecification'
   @EndUserText.label: 'Master Characteristic'
   key I_AssgmtInspMethInspSpec.InspectionSpecification,
   @ObjectModel.foreignKey.association: '_InspSpecificationVersion'
   @EndUserText.label: 'Master Characteristic Version'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationVersion,
   /* Define artifical counter for the additional catalog data.  */
   /* - must be KEY because otherwise each result line of this CDS has the same key for one "unionized" up to four results    */
   /* - this key shall be used for UPDATE; the counter key is related directly to the corresponding DB fields which ends with */
   /*   the same counter number;                                                                                              */
   @EndUserText.label: 'Additional Catalog Field Group'
   key 3 as InspSpecAddlCatalogFieldGroup,

   @ObjectModel.foreignKey.association: '_InspSpecAddlCatalog'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalCatalog3      as InspSpecAdditionalCatalog,
   @ObjectModel.foreignKey.association: '_InspSpecAddlSelectedSet'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalSelectedSet3  as InspSpecAdditionalSelectedSet,
   @ObjectModel.foreignKey.association: '_InspSpecAddlCodeGroup'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalCodeGroup3    as InspSpecAdditionalCodeGroup,
   @ObjectModel.foreignKey.association: '_InspSpecAddlSeldCodeSetPlant'
   I_AssgmtInspMethInspSpec.InspSpecAddlSeldCodeSetPlant3   as InspSpecAddlSeldCodeSetPlant,
   
   /* Associations */
   _InspectionSpecificationPlant,
   _InspectionSpecification,
   _InspSpecificationVersion,
   _InspSpecAddlCatalog,
   _InspSpecAddlSelectedSet,
   _InspSpecAddlCodeGroup,
   _InspSpecAddlSeldCodeSetPlant
   
}
where not I_AssgmtInspMethInspSpec.InspSpecAdditionalCatalog3 = ' ' 
  and I_AssgmtInspMethInspSpec.InspectionMethod = ' '
  
union select from I_AssgmtInspMethInspSpec

  association [1..1] to I_Plant as _InspectionSpecificationPlant
    on $projection.InspectionSpecificationPlant = _InspectionSpecificationPlant.Plant
    
  association [1..1] to I_InspectionSpecification as _InspectionSpecification
    on     $projection.InspectionSpecificationPlant = _InspectionSpecification.InspectionSpecificationPlant
       and $projection.InspectionSpecification      = _InspectionSpecification.InspectionSpecification
       
  association [1..1] to I_InspSpecificationVersion as _InspSpecificationVersion
    on     $projection.InspectionSpecificationPlant   = _InspSpecificationVersion.InspectionSpecificationPlant
       and $projection.InspectionSpecification        = _InspSpecificationVersion.InspectionSpecification
       and $projection.InspectionSpecificationVersion = _InspSpecificationVersion.InspectionSpecificationVersion
       
  association [1..1] to I_Inspectioncatalog as _InspSpecAddlCatalog
    on $projection.InspSpecAdditionalCatalog = _InspSpecAddlCatalog.InspectionCatalog
    
  association [1..1] to I_InspectionSelectedSet as _InspSpecAddlSelectedSet
    on $projection.InspSpecAdditionalCatalog         = _InspSpecAddlSelectedSet.InspectionCatalog
       and $projection.InspSpecAdditionalSelectedSet = _InspSpecAddlSelectedSet.SelectedCodeSet
       and $projection.InspSpecAddlSeldCodeSetPlant  = _InspSpecAddlSelectedSet.SelectedCodeSetPlant

  association [1..1] to I_InspectionCodeGroup as _InspSpecAddlCodeGroup
    on     $projection.InspSpecAdditionalCatalog   = _InspSpecAddlCodeGroup.InspectionCatalog
       and $projection.InspSpecAdditionalCodeGroup = _InspSpecAddlCodeGroup.InspectionCodeGroup

  association [1..1] to I_Plant as _InspSpecAddlSeldCodeSetPlant
    on $projection.InspSpecAddlSeldCodeSetPlant = _InspSpecAddlSeldCodeSetPlant.Plant
              
{
   @ObjectModel.foreignKey.association: '_InspectionSpecificationPlant'
   @EndUserText.label: 'Master Characteristic Plant'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationPlant,
   @ObjectModel.foreignKey.association: '_InspectionSpecification'
   @EndUserText.label: 'Master Characteristic'
   key I_AssgmtInspMethInspSpec.InspectionSpecification,
   @ObjectModel.foreignKey.association: '_InspSpecificationVersion'
   @EndUserText.label: 'Master Characteristic Version'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationVersion,
   /* Define artifical counter for the additional catalog data.  */
   /* - must be KEY because otherwise each result line of this CDS has the same key for one "unionized" up to four results    */
   /* - this key shall be used for UPDATE; the counter key is related directly to the corresponding DB fields which ends with */
   /*   the same counter number;                                                                                              */
   @EndUserText.label: 'Additional Catalog Field Group'
   key 4 as InspSpecAddlCatalogFieldGroup,

   @ObjectModel.foreignKey.association: '_InspSpecAddlCatalog'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalCatalog4      as InspSpecAdditionalCatalog,
   @ObjectModel.foreignKey.association: '_InspSpecAddlSelectedSet'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalSelectedSet4  as InspSpecAdditionalSelectedSet,
   @ObjectModel.foreignKey.association: '_InspSpecAddlCodeGroup'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalCodeGroup4    as InspSpecAdditionalCodeGroup,
   @ObjectModel.foreignKey.association: '_InspSpecAddlSeldCodeSetPlant'
   I_AssgmtInspMethInspSpec.InspSpecAddlSeldCodeSetPlant4   as InspSpecAddlSeldCodeSetPlant,
   
   /* Associations */
   _InspectionSpecificationPlant,
   _InspectionSpecification,
   _InspSpecificationVersion,
   _InspSpecAddlCatalog,
   _InspSpecAddlSelectedSet,
   _InspSpecAddlCodeGroup,
   _InspSpecAddlSeldCodeSetPlant
   
}
where not I_AssgmtInspMethInspSpec.InspSpecAdditionalCatalog4 = ' ' 
  and I_AssgmtInspMethInspSpec.InspectionMethod = ' '
  
union select from I_AssgmtInspMethInspSpec

  association [1..1] to I_Plant as _InspectionSpecificationPlant
    on $projection.InspectionSpecificationPlant = _InspectionSpecificationPlant.Plant
    
  association [1..1] to I_InspectionSpecification as _InspectionSpecification
    on     $projection.InspectionSpecificationPlant = _InspectionSpecification.InspectionSpecificationPlant
       and $projection.InspectionSpecification      = _InspectionSpecification.InspectionSpecification
       
  association [1..1] to I_InspSpecificationVersion as _InspSpecificationVersion
    on     $projection.InspectionSpecificationPlant   = _InspSpecificationVersion.InspectionSpecificationPlant
       and $projection.InspectionSpecification        = _InspSpecificationVersion.InspectionSpecification
       and $projection.InspectionSpecificationVersion = _InspSpecificationVersion.InspectionSpecificationVersion
       
  association [1..1] to I_Inspectioncatalog as _InspSpecAddlCatalog
    on $projection.InspSpecAdditionalCatalog = _InspSpecAddlCatalog.InspectionCatalog
    
  association [1..1] to I_InspectionSelectedSet as _InspSpecAddlSelectedSet
    on $projection.InspSpecAdditionalCatalog         = _InspSpecAddlSelectedSet.InspectionCatalog
       and $projection.InspSpecAdditionalSelectedSet = _InspSpecAddlSelectedSet.SelectedCodeSet
       and $projection.InspSpecAddlSeldCodeSetPlant  = _InspSpecAddlSelectedSet.SelectedCodeSetPlant
    
  association [1..1] to I_InspectionCodeGroup as _InspSpecAddlCodeGroup
    on     $projection.InspSpecAdditionalCatalog   = _InspSpecAddlCodeGroup.InspectionCatalog
       and $projection.InspSpecAdditionalCodeGroup = _InspSpecAddlCodeGroup.InspectionCodeGroup

  association [1..1] to I_Plant as _InspSpecAddlSeldCodeSetPlant
    on $projection.InspSpecAddlSeldCodeSetPlant = _InspSpecAddlSeldCodeSetPlant.Plant
       
{
   @ObjectModel.foreignKey.association: '_InspectionSpecificationPlant'
   @EndUserText.label: 'Master Characteristic Plant'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationPlant,
   @ObjectModel.foreignKey.association: '_InspectionSpecification'
   @EndUserText.label: 'Master Characteristic'
   key I_AssgmtInspMethInspSpec.InspectionSpecification,
   @ObjectModel.foreignKey.association: '_InspSpecificationVersion'
   @EndUserText.label: 'Master Characteristic Version'
   key I_AssgmtInspMethInspSpec.InspectionSpecificationVersion,
   /* Define artifical counter for the additional catalog data.  */
   /* - must be KEY because otherwise each result line of this CDS has the same key for one "unionized" up to four results    */
   /* - this key shall be used for UPDATE; the counter key is related directly to the corresponding DB fields which ends with */
   /*   the same counter number;                                                                                              */
   @EndUserText.label: 'Additional Catalog Field Group'
   key 5 as InspSpecAddlCatalogFieldGroup,

   @ObjectModel.foreignKey.association: '_InspSpecAddlCatalog'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalCatalog5      as InspSpecAdditionalCatalog,
   @ObjectModel.foreignKey.association: '_InspSpecAddlSelectedSet'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalSelectedSet5  as InspSpecAdditionalSelectedSet,
   @ObjectModel.foreignKey.association: '_InspSpecAddlCodeGroup'
   I_AssgmtInspMethInspSpec.InspSpecAdditionalCodeGroup5    as InspSpecAdditionalCodeGroup,
   @ObjectModel.foreignKey.association: '_InspSpecAddlSeldCodeSetPlant'
   I_AssgmtInspMethInspSpec.InspSpecAddlSeldCodeSetPlant5   as InspSpecAddlSeldCodeSetPlant,
   
   /* Associations */
   _InspectionSpecificationPlant,
   _InspectionSpecification,
   _InspSpecificationVersion,
   _InspSpecAddlCatalog,
   _InspSpecAddlSelectedSet,
   _InspSpecAddlCodeGroup,
   _InspSpecAddlSeldCodeSetPlant
   
}
where not I_AssgmtInspMethInspSpec.InspSpecAdditionalCatalog5 = ' ' 
  and I_AssgmtInspMethInspSpec.InspectionMethod = ' '
```
