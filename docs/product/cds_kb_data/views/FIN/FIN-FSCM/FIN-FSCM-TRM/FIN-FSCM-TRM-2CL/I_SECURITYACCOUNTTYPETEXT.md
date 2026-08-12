---
name: I_SECURITYACCOUNTTYPETEXT
description: "Securityaccounttypetext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYACCOUNTTYPETEXT

**Securityaccounttypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `SecurityAccountType` | ✓ | |  | `secacc_type` |  |  |
| `SecurityAccountTypeName` |  | |  | `cast(SecurityAccountTypeText.secacc_type_text as ftr_gen_sec_account_type_name preserving type)` |  |  |
| `_SecurityAccountType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityAccountType` | `I_SecurityAccountType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true   
@AbapCatalog.sqlViewName: 'ISECACCOUNTTYPET'  
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE  
@EndUserText.label: 'Security Account Type - Text'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@ObjectModel:{
    dataCategory: #TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    representativeKey: 'SecurityAccountType'
}
@Analytics: {
    dataExtraction:{
      enabled: true,
      delta.changeDataCapture: {
            automatic: true
      }
    }
}
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'SecuritiesAccountTypeText'

define view I_SecurityAccountTypeText
  as select from trsc_sa_type_t as SecurityAccountTypeText

  association [0..1] to I_SecurityAccountType as _SecurityAccountType on $projection.SecurityAccountType = _SecurityAccountType.SecurityAccountType
  association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key SecurityAccountTypeText.spras                                  as Language,
      @ObjectModel.foreignKey.association: '_SecurityAccountType'
  key SecurityAccountTypeText.secacc_type                            as SecurityAccountType,

      @Semantics.text: true
      cast(SecurityAccountTypeText.secacc_type_text as ftr_gen_sec_account_type_name preserving type) as SecurityAccountTypeName,

      _SecurityAccountType,
      _Language
}
```
