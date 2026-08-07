---
name: I_GLRECORDTYPE
description: Glrecordtype
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_GLRECORDTYPE

**Glrecordtype**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GLRecordType` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as rrcty )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_GLRecordTypeText` | [0..*] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'General Ledger Record Type'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@Analytics.technicalName: 'IFIGLRECORDTYPE'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED   // #CHECK 
// @VDM.dclSourceNotRequired:true
@ObjectModel: {representativeKey: 'GLRecordType', 
               sapObjectNodeType.name: 'GeneralLedgerRecordType', 
               modelingPattern: #ANALYTICAL_DIMENSION,
               supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SQL_DATA_SOURCE],
               usageType: { sizeCategory: #S,
                            dataClass:  #MASTER,
                            serviceQuality: #A }
               }
@Metadata.ignorePropagatedAnnotations: true
//@Search.searchable: true  // not possible if field is cast to the correct data element. View is not CONTAINS compatible


                                     
define view entity I_GLRecordType as select from dd07l
association [0..*] to I_GLRecordTypeText as _Text on $projection.GLRecordType = _Text.GLRecordType
{
  @ObjectModel.text.association: '_Text'
//  @Search.defaultSearchElement: true
//  @Search.fuzzinessThreshold: 0.8      
  key cast( substring(domvalue_l, 1, 1) as rrcty ) as GLRecordType,
  _Text
}
where dd07l.domname = 'RRCTY';
```
