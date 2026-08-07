---
name: I_ACCOUNTASSIGNMENTTYPE
description: Accountassignmenttype
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_ACCOUNTASSIGNMENTTYPE

**Accountassignmenttype**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AccountAssignmentType` | ✓ | |  | `cast(obart as fis_obart preserving type )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccountAssignmentTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFIACTASSGNM'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
//@AccessControl.authorizationCheck: #CHECK
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Account Assignment Type'
@AbapCatalog.buffering.status: #ACTIVE          
@AbapCatalog.buffering.type: #FULL 
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled
@Metadata.ignorePropagatedAnnotations:true 

@ObjectModel: {representativeKey: 'AccountAssignmentType', 
               sapObjectNodeType.name: 'AccountAssignmentType', 
               supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET],
               modelingPattern: #ANALYTICAL_DIMENSION,
               usageType: {
                            dataClass: #META,
                            serviceQuality: #A,
                            sizeCategory: #M
                           }
              } 

define view I_AccountAssignmentType as select from tbo00  
association [0..*] to I_AccountAssignmentTypeT as _Text on $projection.AccountAssignmentType = _Text.AccountAssignmentType 
 {
    @ObjectModel.text.association: '_Text'
    key cast(obart as fis_obart preserving type ) as AccountAssignmentType,
    _Text
    
}
```
