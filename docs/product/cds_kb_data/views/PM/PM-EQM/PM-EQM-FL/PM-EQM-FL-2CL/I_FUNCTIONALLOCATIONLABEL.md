---
name: I_FUNCTIONALLOCATIONLABEL
description: "Functional Location Label"
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONLABEL')/$value
semantic_en: "Functional Location Label"
semantic_vi: "Functional Location Label — CDS view giao diện dựa trên I_FunctionalLocation."
keywords:
  - "functional"
  - "location"
  - "label"
  - "name"
  - "labeling"
  - "syst"
  - "funcnl"
  - "user"
  - "primary"
tags:
  - PM
  - component:PM-EQM-FL-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-FL
  - PM-EQM-FL-2CL
---
# I_FUNCTIONALLOCATIONLABEL

**Functional Location Label**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONLABEL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` | ✓ | |  |  | `CHAR(30)` | Functional Location |
| `FunctionalLocationLabelName` |  | |  | `cast( case when _FlocLabelingState.AlternativeLabelingStatus = '2' and _FlocLabelingState.AlternativeLabelingIsActive = 'X' then coalesce( coalesce(_FlocUserlabel.FunctionalLocationLabelName, _FlocPrimaryLabel.FunctionalLocationLabelName), FunctionalLocation ) when _FlocLabelingState.AlternativeLabelingStatus = '3' and _FlocLabelingState.AlternativeLabelingIsActive = '' then coalesce(_FlocPrimaryLabel.FunctionalLocationLabelName, FunctionalLocation) else FunctionalLocation end as ilom_strno )` | `CHAR(40)` | Functional Location Label |
| `FunctionalLocLabelingSyst` |  | |  | `cast( case when _FlocLabelingState.AlternativeLabelingStatus = '2' and _FlocLabelingState.AlternativeLabelingIsActive = 'X' then coalesce(coalesce(_FlocUserlabel.FunctionalLocLabelingSyst, _FlocPrimaryLabel.FunctionalLocLabelingSyst),'') when _FlocLabelingState.AlternativeLabelingStatus = '3' and _FlocLabelingState.AlternativeLabelingIsActive = '' then coalesce(_FlocPrimaryLabel.FunctionalLocLabelingSyst,'') else '' end as ilom_alkey )` | `CHAR(1)` | Labeling system for functional locations |
| `FuncnlLocUserLabelName` |  | | `_FlocUserlabel` | `FunctionalLocationLabelName` | `CHAR(40)` | Functional Location Label |
| `FuncnlLocPrimaryLabelName` |  | | `_FlocPrimaryLabel` | `FunctionalLocationLabelName` | `CHAR(40)` | Functional Location Label |
| `_FuncLocationLabelSearch` | | ✓ | | | | |
| `_FunctionalLocationText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FlocLabelingState` | `I_FlocLabelingState` | [0..1] |
| `_FlocUserlabel` | `P_FlocUserLabel` | [0..1] |
| `_FlocPrimaryLabel` | `P_FlocPrimaryLabel` | [0..1] |
| `_FuncLocationLabelSearch` | `I_FuncLocationLabelSearch` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONLABEL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNCTIONALLOCATIONLABEL')/$value)*

```abap
@EndUserText.label: 'Functional Location Label'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #COMPOSITE
@AbapCatalog: { sqlViewName: 'IFUNCLOCLABEL', preserveKey }
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@ObjectModel.representativeKey: 'FunctionalLocation'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L

@Metadata: { allowExtensions, ignorePropagatedAnnotations }
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]

define view I_FunctionalLocationLabel
  as select from I_FunctionalLocation
  association [0..1] to I_FlocLabelingState       as _FlocLabelingState       on  _FlocLabelingState.AlternativeLabelingIsActive = 'X'
                                                                              or  _FlocLabelingState.AlternativeLabelingIsActive = ''

  association [0..1] to P_FlocUserLabel           as _FlocUserlabel           on  _FlocUserlabel.FunctionalLocation = $projection.FunctionalLocation
  association [0..1] to P_FlocPrimaryLabel        as _FlocPrimaryLabel        on  _FlocPrimaryLabel.FunctionalLocation = $projection.FunctionalLocation

  // Use the calculated Functional Location Label and Labeling System to fetch a raw version of the Functional Location Label which can be used in HANA contains() statement
  association [0..1] to I_FuncLocationLabelSearch as _FuncLocationLabelSearch on  $projection.FunctionalLocation          = _FuncLocationLabelSearch.FunctionalLocation
                                                                              and $projection.FunctionalLocLabelingSyst   = _FuncLocationLabelSearch.FunctionalLocLabelingSyst
                                                                              and $projection.FunctionalLocationLabelName = _FuncLocationLabelSearch.FunctionalLocationLabelName
{

  key  FunctionalLocation,

      // --------------------------------------------------------------------------------------------------
      // Calculate the active Functional Location Label (if available)
      // --------------------------------------------------------------------------------------------------
      cast( case when _FlocLabelingState.AlternativeLabelingStatus = '2' and _FlocLabelingState.AlternativeLabelingIsActive = 'X' then  // 2 = Alternative Labeling is active
            coalesce( coalesce(_FlocUserlabel.FunctionalLocationLabelName, _FlocPrimaryLabel.FunctionalLocationLabelName), FunctionalLocation )
        when _FlocLabelingState.AlternativeLabelingStatus = '3' and _FlocLabelingState.AlternativeLabelingIsActive = '' then // 3 = Alternative Labeling is deactivated
            coalesce(_FlocPrimaryLabel.FunctionalLocationLabelName, FunctionalLocation)
        else          // 1 = Alternative Labeling has never been active (no entries in IFLOS table)
            FunctionalLocation
      end as  ilom_strno    )                       as FunctionalLocationLabelName,

      // --------------------------------------------------------------------------------------------------
      // Calculate the active Functional Location Labeling System (if available)
      // --------------------------------------------------------------------------------------------------
      cast( case when _FlocLabelingState.AlternativeLabelingStatus = '2' and _FlocLabelingState.AlternativeLabelingIsActive = 'X' then  // 2 = Alternative Labeling is active
            coalesce(coalesce(_FlocUserlabel.FunctionalLocLabelingSyst, _FlocPrimaryLabel.FunctionalLocLabelingSyst),'')
        when _FlocLabelingState.AlternativeLabelingStatus = '3' and _FlocLabelingState.AlternativeLabelingIsActive = '' then // 3 = Alternative Labeling is deactivated
            coalesce(_FlocPrimaryLabel.FunctionalLocLabelingSyst,'')
        else          // 1 = Alternative Labeling has never been active (no entries in IFLOS table)
            ''
      end as  ilom_alkey     )                      as FunctionalLocLabelingSyst,

      // For searching purposes
      _FlocUserlabel.FunctionalLocationLabelName    as FuncnlLocUserLabelName,
      _FlocPrimaryLabel.FunctionalLocationLabelName as FuncnlLocPrimaryLabelName,

      // Propagate the raw version version of the Functional Location Label to enable HANA search on the field
      _FuncLocationLabelSearch,
      _FunctionalLocationText
}
```
