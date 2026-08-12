---
name: I_PRAROYTYTXGLOAGENCYRPTTYPET
description: "Roy 2 0 TX GLO Agency Report Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYTXGLOAGENCYRPTTYPET')/$value
semantic_en: "Roy 2 0 TX GLO Agency Report Type - Text"
semantic_vi: "Roy 2 0 TX GLO Agency Report Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "roy"
  - "glo"
  - "agency"
  - "report"
  - "type"
  - "text"
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
# I_PRAROYTYTXGLOAGENCYRPTTYPET

**Roy 2 0 TX GLO Agency Report Type - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYTXGLOAGENCYRPTTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgencyReportType` | ✓ | |  | `cast( domvalue_l as oiuy3_tx_original_report )` | `CHAR(1)` | Royalty 2.0 - TX GLOTAMU - Original Report |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `AgencyReportTypeName` |  | |  | `cast( ddtext as oiu_vdm_txglo_agency_rptt_name )` | `CHAR(60)` | Royalty - TX GLO Agency Report Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYTXGLOAGENCYRPTTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAROYTYTXGLOAGENCYRPTTYPET')/$value)*

```abap
@EndUserText.label: 'Roy 2 0 TX GLO Agency Report Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVROYAGRPTTYT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'AgencyReportType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
define view I_PRARoytyTXGLOAgencyRptTypeT
  as select from dd07t
{
  key cast( domvalue_l as oiuy3_tx_original_report )          as AgencyReportType,
      @Semantics.language
  key cast( ddlanguage as spras )                             as Language,
      @Semantics.text
      cast( ddtext as oiu_vdm_txglo_agency_rptt_name )        as AgencyReportTypeName
}
where
      domname  = 'OIUY3_TX_ORIGINAL_REPORT'
  and as4local = 'A';
```
