---
name: I_ACCOUNTASSIGNMENTTYPE
description: "Accountassignmenttype"
app_component: FI-GL-IS-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountAssignmentType` | ✓ | |  | `cast(obart as fis_obart preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

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
