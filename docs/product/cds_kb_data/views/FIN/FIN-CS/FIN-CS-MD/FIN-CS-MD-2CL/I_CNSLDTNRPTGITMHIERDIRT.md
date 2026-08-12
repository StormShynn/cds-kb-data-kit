---
name: I_CNSLDTNRPTGITMHIERDIRT
description: "Reporting Item Hierarchy Directory - Txt"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIRT')/$value
semantic_en: "Reporting Item Hierarchy Directory - Txt"
semantic_vi: "Reporting Item Hierarchy Directory - Txt — CDS view giao diện (master data) dựa trên hrrp_directoryt."
keywords:
  - "reporting"
  - "item"
  - "hierarchy"
  - "directory"
  - "txt"
  - "consolidation"
  - "chart"
  - "accounts"
  - "hier"
  - "additional"
  - "master"
  - "data"
  - "language"
  - "rptg"
  - "text"
tags:
  - FIN
  - bo:purchaseorder
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_CNSLDTNRPTGITMHIERDIRT

**Reporting Item Hierarchy Directory - Txt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIRT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( left( hrrp_directory.hrycls, 2) as fc_itclg preserving type )` | `CHAR(2)` | Consolidation Chart of Accounts |
| `ConsolidationReportingItemHier` | ✓ | |  | `cast( substring( hrrp_directoryt.hryid, 9, 10 ) as fincs_rihry preserving type )` | `CHAR(10)` | Reporting Item Hierarchy |
| `AdditionalMasterDataHierarchy` | ✓ | |  | `cast(left(hrrp_directoryt.hryid, 40) as fincs_hryid preserving type )` | `CHAR(40)` | Consolidation Hierarchy ID |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ConsolidationRptgItemHierText` |  | |  | `hrytxt` | `CHAR(50)` | Hierarchy description |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIRT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNSLDTNRPTGITMHIERDIRT')/$value)*

```abap
@AbapCatalog: {
  sqlViewName: 'ICCRIHIERDIRT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  representativeKey: 'ConsolidationReportingItemHier',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM.viewType: #BASIC
@EndUserText.label: 'Reporting Item Hierarchy Directory - Txt'

define view I_CnsldtnRptgItmHierDirT
  as select from hrrp_directoryt

    inner join   hrrp_directory on  hrrp_directory.hryid  = hrrp_directoryt.hryid
                                and hrrp_directory.hryver = hrrp_directoryt.hryver
                                and hrrp_directory.hrytyp = 'CS16'

  association [0..1] to I_CnsldtnChartOfAccounts as _ChartOfAccounts on $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts

  association [0..1] to I_Language               as _Language        on $projection.Language = _Language.Language

{
        @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key   cast( left( hrrp_directory.hrycls, 2) as fc_itclg preserving type )              as ConsolidationChartOfAccounts,

  key   cast( substring( hrrp_directoryt.hryid, 9, 10 ) as fincs_rihry preserving type ) as ConsolidationReportingItemHier,

  key   cast(left(hrrp_directoryt.hryid, 40) as fincs_hryid preserving type )            as AdditionalMasterDataHierarchy,

        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language
  key   hrrp_directoryt.spras                                                            as Language,

        @Semantics.text: true
        hrrp_directoryt.hrytxt                                                           as ConsolidationRptgItemHierText,


        _ChartOfAccounts,
        _Language
}
where
      hrrp_directoryt.hrytype  = 'CS16'
  and hrrp_directoryt.hryvalto = '99991231';
```
