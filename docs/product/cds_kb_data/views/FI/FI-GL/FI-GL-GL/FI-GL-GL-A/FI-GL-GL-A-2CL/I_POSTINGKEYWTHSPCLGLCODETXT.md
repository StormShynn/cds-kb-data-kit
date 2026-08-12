---
name: I_POSTINGKEYWTHSPCLGLCODETXT
description: "Postingkeywthspclglcodetxt"
app_component: FI-GL-GL-A-2CL
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
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_POSTINGKEYWTHSPCLGLCODETXT

**Postingkeywthspclglcodetxt**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `Language` | ✓ | |  | `spras` |  |  |
| `PostingKey` | ✓ | |  | `cast(tbsl.bschl as fis_bschl preserving type)` |  |  |
| `SpecialGLCode` | ✓ | |  | `cast(tbslt.umskz as fac_umskz preserving type )` |  |  |
| `FinancialAccountType` |  | |  | `cast (tbsl.koart as farp_koart preserving type )` |  |  |
| `PostingKeyName` |  | |  | `cast (tbslt.ltext as fis_bschl_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PostingKey` | | ✓ | | | | |
| `_SpecialGLCode` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PostingKey` | `I_PostingKey` | [0..1] |
| `_SpecialGLCode` | `I_SpecialGLCode` | [0..1] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataExtraction.enabled: true }
@EndUserText.label: 'Posting Key With Special General Leder Code - Text'
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'SpecialGLCode'
,                usageType: { sizeCategory: #S,
                 dataClass:  #CUSTOMIZING,
                 serviceQuality: #A },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }                  
@Metadata.ignorePropagatedAnnotations: true 
@Search.searchable: true 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view entity I_PostingKeyWthSpclGLCodeTxt as select from tbslt inner join tbsl on tbslt.bschl = tbsl.bschl

association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
association [0..1] to I_PostingKey           as _PostingKey           on  $projection.PostingKey    = _PostingKey.PostingKey 
association [0..1] to I_SpecialGLCode        as _SpecialGLCode        on $projection.SpecialGLCode = _SpecialGLCode.SpecialGLCode
                                                                      and $projection.FinancialAccountType = _SpecialGLCode.FinancialAccountType
association [0..1] to I_FinancialAccountType as _FinancialAccountType on $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType

{

@Semantics.language   
key tbslt.spras as Language,
@ObjectModel.foreignKey.association: '_PostingKey'
key cast(tbsl.bschl as fis_bschl preserving type) as PostingKey,
@ObjectModel.foreignKey.association: '_SpecialGLCode'
key cast(tbslt.umskz as fac_umskz preserving type ) as SpecialGLCode,
@ObjectModel.foreignKey.association: '_FinancialAccountType'
cast (tbsl.koart as farp_koart preserving type ) as FinancialAccountType, 
@Semantics.text
@Search.defaultSearchElement: true
@Search.fuzzinessThreshold: 0.8 
cast (tbslt.ltext as fis_bschl_name preserving type ) as PostingKeyName,

_Language,
_PostingKey,
_SpecialGLCode,
_FinancialAccountType

};
```
