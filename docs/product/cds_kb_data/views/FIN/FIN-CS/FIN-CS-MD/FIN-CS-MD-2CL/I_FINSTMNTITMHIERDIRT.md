---
name: I_FINSTMNTITMHIERDIRT
description: "FSItem Hierarchy Directory - Text"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRT')/$value
semantic_en: "FSItem Hierarchy Directory - Text"
semantic_vi: "FSItem Hierarchy Directory - Text — CDS view cơ bản (master data) dựa trên hrrp_dirt_n."
keywords:
  - "fsitem"
  - "hierarchy"
  - "directory"
  - "text"
  - "consolidation"
  - "chart"
  - "accounts"
  - "financial"
  - "statement"
  - "item"
  - "hier"
  - "additional"
  - "master"
  - "data"
  - "language"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-MD-2CL
  - FIN-CS
  - FIN-CS-MD
  - FIN-CS-MD-2CL
  - interface-view
  - lob:finance
---
# I_FINSTMNTITMHIERDIRT

**FSItem Hierarchy Directory - Text**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( _hrrp_dirt_n.itclg as fc_itclg preserving type )` | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItemHier` | ✓ | |  | `cast( substring( _hrrp_dirt_n.hryid, 9, 10 ) as fc_ithry preserving type )` | `CHAR(10)` | Item Hierarchy |
| `AdditionalMasterDataHierarchy` | ✓ | |  | `cast(_hrrp_dirt_n.hryid as fincs_hryid preserving type )` | `CHAR(40)` | Consolidation Hierarchy ID |
| `Language` | ✓ | | `_hrrp_dirt_n` | `spras` | `LANG(1)` | Language Key |
| `FinancialStatementItemHierTxt` |  | | `_hrrp_dirt_n` | `hrytxt` | `CHAR(50)` | Hierarchy description |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINSTMNTITMHIERDIRT')/$value)*

```abap
@AbapCatalog:{
  sqlViewName: 'ICCFSITMHIERDIRT'
  }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata:{
  ignorePropagatedAnnotations:true
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #M},
  representativeKey: 'FinancialStatementItemHier',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
}
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FSItem Hierarchy Directory - Text'

define view I_FinStmntItmHierDirT
  as select from hrrp_dirt_n as _hrrp_dirt_n

  association [0..1] to I_CnsldtnChartOfAccounts as _ChartOfAccounts on $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts

  association [0..1] to I_Language               as _Language        on $projection.Language = _Language.Language

{
        @ObjectModel.foreignKey.association: '_ChartOfAccounts'
  key   cast( _hrrp_dirt_n.itclg as fc_itclg preserving type )                     as ConsolidationChartOfAccounts,

  key   cast( substring( _hrrp_dirt_n.hryid, 9, 10 ) as fc_ithry preserving type ) as FinancialStatementItemHier,

  key   cast(_hrrp_dirt_n.hryid as fincs_hryid preserving type )                   as AdditionalMasterDataHierarchy,

        @ObjectModel.foreignKey.association: '_Language'
        @Semantics.language
  key   _hrrp_dirt_n.spras                                                         as Language,

        @Semantics.text
        _hrrp_dirt_n.hrytxt                                                        as FinancialStatementItemHierTxt,

        _ChartOfAccounts,
        _Language
}
where
          _hrrp_dirt_n.hrytyp     = 'CS15'
  and(
    (
          _hrrp_dirt_n.hryvalfrom = '00000000'
      and _hrrp_dirt_n.hryvalto   = '00000000'
    )
    or(
          _hrrp_dirt_n.hryvalfrom <= $session.system_date
      and _hrrp_dirt_n.hryvalto   >= $session.system_date
    )
  );
```
