---
name: I_BANKGUARANTEETYPETEXT
description: "Bank Guarantee Type - Text"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEETYPETEXT')/$value
semantic_en: "Bank Guarantee Type - Text"
semantic_vi: "Bank Guarantee Type - Text — CDS view giao diện dựa trên tlct_bg_typet."
keywords:
  - "bank"
  - "guarantee"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - FIN
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
---
# I_BANKGUARANTEETYPETEXT

**Bank Guarantee Type - Text**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEETYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `BankGuaranteeType` | ✓ | |  | `bg_type` | `CHAR(4)` | Bank Guarantee Type |
| `BankGuaranteeTypeName` |  | |  | `bg_type_desc` | `CHAR(50)` | Bank Guarantee Type Description |
| `_Language` | | ✓ | | | | |
| `_BankGuaranteeType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_BankGuaranteeType` | `I_BankGuaranteeType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEETYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKGUARANTEETYPETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBNKGUATYPET'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Bank Guarantee Type - Text'
@ObjectModel.dataCategory: #TEXT 
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@Metadata.ignorePropagatedAnnotations: true 
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_BankGuaranteeTypeText 
  as select from tlct_bg_typet
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
  association [1..1] to I_BankGuaranteeType as _BankGuaranteeType on $projection.BankGuaranteeType = _BankGuaranteeType.BankGuaranteeType
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
      @ObjectModel.foreignKey.association: '_BankGuaranteeType'
  key bg_type as BankGuaranteeType,
      
      @Semantics.text: true
      bg_type_desc as BankGuaranteeTypeName,
      
      _Language,
      
      _BankGuaranteeType
}
```
