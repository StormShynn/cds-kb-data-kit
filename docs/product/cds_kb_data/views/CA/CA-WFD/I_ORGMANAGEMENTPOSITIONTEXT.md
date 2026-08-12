---
name: I_ORGMANAGEMENTPOSITIONTEXT
description: "Table for Position with Text"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGMANAGEMENTPOSITIONTEXT')/$value
semantic_en: "Table for Position with Text"
semantic_vi: "Table for Position with Text — CDS view giao diện dựa trên hrp1000."
keywords:
  - "table"
  - "for"
  - "position"
  - "with"
  - "text"
  - "management"
  - "language"
  - "start"
  - "date"
  - "short"
  - "name"
tags:
  - CA
  - bo:purchaseorder
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
---
# I_ORGMANAGEMENTPOSITIONTEXT

**Table for Position with Text**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGMANAGEMENTPOSITIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrgManagementPositionID` | ✓ | |  | `objid` | `NUMC(8)` | Object ID |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `StartDate` | ✓ | |  | `begda` | `DATS(8)` | Start Date |
| `EndDate` | ✓ | |  | `endda` | `DATS(8)` | End Date |
| `OrgManagementPositionShortName` |  | |  | `short` | `CHAR(12)` | Object Abbreviation |
| `OrgManagementPositionName` |  | |  | `stext` | `CHAR(40)` | Object Name |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGMANAGEMENTPOSITIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORGMANAGEMENTPOSITIONTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPOSITIOTXT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType:  #BASIC
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Table for Position with Text'
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OrgManagementPositionID'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]
define view I_OrgManagementPositionText 
  as select from hrp1000 as HRP1000
    inner join t77s0  as systemtable on  grpid = 'PLOGI'
                                     and semid = 'PLOGI'
                                     and gsval = hrp1000.plvar
  association [0..1] to I_Language as _Language on hrp1000.langu = _Language.Language
{
  key hrp1000.objid as OrgManagementPositionID,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key hrp1000.langu as Language,
      @Semantics.businessDate.from: true
  key hrp1000.begda as StartDate,
      @Semantics.businessDate.to: true
  key hrp1000.endda as EndDate,
      hrp1000.short as OrgManagementPositionShortName,
      @Semantics.text: true
      hrp1000.stext as OrgManagementPositionName,
      _Language
}
where
      hrp1000.otype = 'S'
  and hrp1000.istat = '1'
```
