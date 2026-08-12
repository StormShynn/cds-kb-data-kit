---
name: I_MATLACCOUNTASSIGNMENTGROUPT
description: "Matlaccountassignmentgroupt"
app_component: SD-BF-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-MD
  - interface-view
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
---
# I_MATLACCOUNTASSIGNMENTGROUPT

**Matlaccountassignmentgroupt**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MatlAccountAssignmentGroup` | ✓ | |  | `ktgrm` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MatlAccountAssignmentGroupName` |  | |  | `vtext` |  |  |
| `_MatlAccountAssignmentGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MatlAccountAssignmentGroup` | `I_MatlAccountAssignmentGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'MatlAccountAssignmentGroup'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Account Assignment Group of Material - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@AbapCatalog.sqlViewName: 'ISDACCTASSGMTGT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY   ]
define view I_MatlAccountAssignmentGroupT
as select from tvkmt 

association[0..1] to I_MatlAccountAssignmentGroup as _MatlAccountAssignmentGroup on $projection.MatlAccountAssignmentGroup = _MatlAccountAssignmentGroup.MatlAccountAssignmentGroup
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_MatlAccountAssignmentGroup'
    key ktgrm as MatlAccountAssignmentGroup,

    @Semantics.language:true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Semantics.text:true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH     
    vtext as MatlAccountAssignmentGroupName,
    
    //Associations
    _MatlAccountAssignmentGroup,
    _Language  
};
```
