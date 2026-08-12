---
name: I_SPECIALGLCODE
description: "Specialglcode"
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
# I_SPECIALGLCODE

**Specialglcode**

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
| `SpecialGLCode` | ✓ | |  | `umskz` |  |  |
| `FinancialAccountType` | ✓ | |  | `koart` |  |  |
| `SpecialGLTransactionType` |  | |  | `umsks` |  |  |
| `CreditLimitIsChecked` |  | |  | `klimp` |  |  |
| `IsNotedItmWithoutBalUpdt` |  | |  | `merkp` |  |  |
| `_Text` | | ✓ | | | | |
| `_FinancialAccountType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SpecialGLCodeText` | [0..*] |
| `_FinancialAccountType` | `I_FinancialAccountType` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Special General Ledger Code'
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFISPECGLCODE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'SpecialGLCode'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.buffering.status: #ACTIVE         
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true  
@AbapCatalog.buffering.numberOfKeyFields: 1
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.sapObjectNodeType.name: 'SpecialGeneralLedgerCode'
@Search.searchable: true
define view I_SpecialGLCode
as select from t074u
association [0..*] to I_SpecialGLCodeText as _Text on $projection.FinancialAccountType = _Text.FinancialAccountType and $projection.SpecialGLCode = _Text.SpecialGLCode
association [1..1] to I_FinancialAccountType as _FinancialAccountType on $projection.FinancialAccountType = _FinancialAccountType.FinancialAccountType
{
    @ObjectModel.text.association: '_Text'
    @Search.defaultSearchElement:true
    @Search.fuzzinessThreshold:0.8
    @Search.ranking:#HIGH
    key umskz as SpecialGLCode,
    @ObjectModel.foreignKey.association: '_FinancialAccountType' //Inserted by VDM CDS Suite Plugin
    key koart as FinancialAccountType,
    umsks as SpecialGLTransactionType,
    klimp as CreditLimitIsChecked,
    merkp as IsNotedItmWithoutBalUpdt,
    _FinancialAccountType,
    _Text
    
};
```
