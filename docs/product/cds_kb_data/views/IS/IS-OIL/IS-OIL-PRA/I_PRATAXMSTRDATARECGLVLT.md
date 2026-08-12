---
name: I_PRATAXMSTRDATARECGLVLT
description: "Tax Reporting Master Level - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXMSTRDATARECGLVLT')/$value
semantic_en: "Tax Reporting Master Level - Text"
semantic_vi: "Tax Reporting Master Level - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "tax"
  - "reporting"
  - "master"
  - "level"
  - "text"
  - "data"
  - "recording"
  - "language"
  - "name"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRATAXMSTRDATARECGLVLT

**Tax Reporting Master Level - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXMSTRDATARECGLVLT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MasterDataRecordingLvl` | ✓ | |  | `cast (domvalue_l as oiux3_tx_master_level )` | `CHAR(1)` | Texas Master Data Level |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `MasterDataRecordingLvlName` |  | |  | `cast (ddtext as oiu_vdm_master_data_lvl_name )` | `CHAR(60)` | Tax 2.0 - Master Level Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXMSTRDATARECGLVLT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXMSTRDATARECGLVLT')/$value)*

```abap
@EndUserText.label: 'Tax Reporting Master Level - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXMSTRLVLT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'MasterDataRecordingLvl'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATaxMstrDataRecgLvlT
  as select from dd07t
{
  key cast (domvalue_l as oiux3_tx_master_level )            as MasterDataRecordingLvl,
      @Semantics.language
  key cast( ddlanguage as spras )                            as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_master_data_lvl_name )         as MasterDataRecordingLvlName
}
where
      domname  = 'OIUX3_TX_MASTER_LEVEL'
  and as4local = 'A';
```
