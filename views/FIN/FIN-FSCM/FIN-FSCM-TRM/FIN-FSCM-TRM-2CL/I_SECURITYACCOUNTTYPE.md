---
name: I_SECURITYACCOUNTTYPE
description: Securityaccounttype
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYACCOUNTTYPE

**Securityaccounttype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SecurityAccountType` | ✓ | |  | `secacc_type` |  |  |
| `SecurityAccountCategory` |  | |  | `secacc_cat` |  |  |
| `_Text` | | ✓ | | | | |
| `_SecurityAccountCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SecurityAccountTypeText` | [0..*] |
| `_SecurityAccountCategory` | `I_SecurityAccountCategory` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true // only if required by ATC check 
@AbapCatalog.sqlViewName: 'ISECACCOUNTTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@Analytics.dataCategory: #DIMENSION 
@Analytics.dataExtraction.enabled: true // use only if view is customizing or small master data 
@Analytics.internalName: #LOCAL 
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Security Account Type'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'SecurityAccountType'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M 
@Metadata.allowExtensions:true   
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'SecuritiesAccountType'

define view I_SecurityAccountType
  as select from trsc_secacc_type as SecurityAccountType

  association [0..*] to I_SecurityAccountTypeText as _Text on $projection.SecurityAccountType = _Text.SecurityAccountType
  association [0..1] to I_SecurityAccountCategory as _SecurityAccountCategory on $projection.SecurityAccountCategory = _SecurityAccountCategory.SecurityAccountCategory
{
      @ObjectModel.text.association: '_Text'
      key secacc_type  as SecurityAccountType,
      secacc_cat       as SecurityAccountCategory,
      _Text,
      _SecurityAccountCategory
}
```
