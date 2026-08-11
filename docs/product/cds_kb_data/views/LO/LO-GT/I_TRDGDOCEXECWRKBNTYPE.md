---
name: I_TRDGDOCEXECWRKBNTYPE
description: "Trading Exec Workbench Type of Trdg Doc"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCEXECWRKBNTYPE')/$value
semantic_en: "Trading Exec Workbench Type of Trdg Doc"
semantic_vi: "Trading Exec Workbench Type of Trdg Doc — CDS view cơ bản dựa trên R_TrdgDocExecWrkbnType."
keywords:
  - "trading"
  - "exec"
  - "workbench"
  - "type"
  - "trdg"
  - "doc"
  - "wrkbn"
tags:
  - LO
  - component:LO-GT
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGDOCEXECWRKBNTYPE

**Trading Exec Workbench Type of Trdg Doc**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCEXECWRKBNTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdgDocExecWrkbnType` | ✓ | |  |  | `CHAR(4)` | Trading Execution Workbench Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCEXECWRKBNTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGDOCEXECWRKBNTYPE')/$value)*

```abap
@EndUserText.label: 'Trading Exec Workbench Type of Trdg Doc'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
   representativeKey: 'TrdgDocExecWrkbnType',
   dataCategory: #VALUE_HELP,
   modelingPattern: #VALUE_HELP_PROVIDER,
   supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
   resultSet: {
     sizeCategory: #XS
   },
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #B,
     sizeCategory:   #S
   }
}

@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}

@Metadata.ignorePropagatedAnnotations: true
define root view entity I_TrdgDocExecWrkbnType
  as select from R_TrdgDocExecWrkbnType
  composition [0..*] of I_TrdgDocExecWrkbnTypeText as _Text
{

      @ObjectModel.text.association: '_Text'
  key TrdgDocExecWrkbnType,
  
      /* Associations */
      _Text

}
```
