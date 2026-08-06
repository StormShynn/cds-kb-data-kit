---
name: I_SECURITYACCOUNTCATEGORYTEXT
description: Securityaccountcategorytext
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
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_SECURITYACCOUNTCATEGORYTEXT

**Securityaccountcategorytext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `ddlanguage` |
| key `SecurityAccountCategory` | `dd07t.domvalue_l` |
| `SecurityAccountCategoryName` | `cast(dd07t.ddtext as ftr_gen_sec_acct_cat_name preserving type)` |
| `_SecurityAccountCategory` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SecurityAccountCategory` | `I_SecurityAccountCategory` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
// harmonized annotations 
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.compiler.compareFilter: true  
@AbapCatalog.sqlViewName: 'ISCRTYACCCATTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL 
@ClientHandling.algorithm: #SESSION_VARIABLE  
@EndUserText.label: 'Security Account Category - Text'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel:{
    dataCategory: #TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    representativeKey: 'SecurityAccountCategory'
}
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'SecuritiesAccountCategoryText'
@Metadata.ignorePropagatedAnnotations: true // For C1-Release 
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_SecurityAccountCategoryText
  as select from dd07t

  association [0..1] to I_SecurityAccountCategory as _SecurityAccountCategory on $projection.SecurityAccountCategory = _SecurityAccountCategory.SecurityAccountCategory
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{

      @Semantics.language: true
  key ddlanguage                               as Language,
      @ObjectModel.text.element: 'SecurityAccountCategoryName'
      @ObjectModel.foreignKey.association: '_SecurityAccountCategory'
  key dd07t.domvalue_l                         as SecurityAccountCategory,
      @Semantics.text: true
      cast(dd07t.ddtext as ftr_gen_sec_acct_cat_name preserving type) as SecurityAccountCategoryName,
     _SecurityAccountCategory,
      _Language

}
where
      dd07t.domname  = 'TPM_SECACC_CAT'
  and dd07t.as4local = 'A'
```
