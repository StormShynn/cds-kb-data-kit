---
name: I_CAACCOUNTASSIGNMENTCATEGORY
description: Caaccountassignmentcategory
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAACCOUNTASSIGNMENTCATEGORY

**Caaccountassignmentcategory**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAAccountAssignmentCategory` | ✓ | |  | `kontt` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAccountAssignmentCategoryT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction: { enabled: true,
                               delta.changeDataCapture.automatic: true }, 
             technicalName: 'ICAACCTASSGMTC' }

@EndUserText.label: 'Account Assignment Category'

@ObjectModel: { modelingPattern: #ANALYTICAL_DIMENSION,
                representativeKey: 'CAAccountAssignmentCategory',
                sapObjectNodeType.name: 'ContrAcctgAccountAssignmentCat',
                supportedCapabilities: [ #ANALYTICAL_DIMENSION, 
                                         #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC

define view entity I_CAAccountAssignmentCategory 
  as select from tfk000k
  
  association [0..*] to I_CAAccountAssignmentCategoryT as _Text on $projection.CAAccountAssignmentCategory = _Text.CAAccountAssignmentCategory

{
      @ObjectModel.text.association: '_Text'  
  key kontt as CAAccountAssignmentCategory,
//    funcs   
  
      _Text      
}
```
