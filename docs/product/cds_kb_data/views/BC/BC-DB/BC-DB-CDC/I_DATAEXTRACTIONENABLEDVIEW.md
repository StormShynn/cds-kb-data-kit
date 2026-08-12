---
name: I_DATAEXTRACTIONENABLEDVIEW
description: "CDS Views enabled for Data Extraction"
app_component: BC-DB-CDC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DATAEXTRACTIONENABLEDVIEW')/$value
semantic_en: "CDS Views enabled for Data Extraction"
semantic_vi: "CDS Views enabled for Data Extraction — CDS view giao diện dựa trên DHCDC_AUTH_CdsExtrctnEnabled."
keywords:
  - "views"
  - "enabled"
  - "for"
  - "data"
  - "extraction"
  - "view"
  - "name"
  - "description"
  - "released"
  - "delta"
  - "capture"
  - "supported"
tags:
  - BC
  - BC-DB
  - BC-DB-CDC
  - component:BC-DB-CDC
  - interface-view
  - lob:basis components
---
# I_DATAEXTRACTIONENABLEDVIEW

**CDS Views enabled for Data Extraction**

| Property | Value |
|---|---|
| App Component | `BC-DB-CDC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DATAEXTRACTIONENABLEDVIEW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DataExtractionViewName` | ✓ | |  | `viewname_raw` | `CHAR(30)` |  |
| `DataExtractionViewDescription` |  | |  | `ddtext` | `CHAR(60)` | Short Description of Repository Objects |
| `IsSAPReleasedView` |  | |  | `case when t0.release_state = 'C1' then cast('X' as abap_boolean) else cast('' as abap_boolean) end` | `CHAR(1)` | Truth Value: True/False |
| `DeltaChgDataCaptureIsSupported` |  | |  | `case when t0.isDeltaSupported = 'true' then cast('X' as abap_boolean) else cast('' as abap_boolean) end` | `CHAR(1)` | Truth Value: True/False |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DATAEXTRACTIONENABLEDVIEW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DATAEXTRACTIONENABLEDVIEW')/$value)*

```abap
//*************************************************
// The view returns CDS Views which are enabled for Data Extraction.
//*************************************************
@AbapCatalog.sqlViewName: 'IXTRCTNENBLDVW'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: { serviceQuality: #C,
                          sizeCategory: #S,
                          dataClass: #MASTER
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'CDS Views enabled for Data Extraction'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] } */
define view I_DataExtractionEnabledView
  as select from DHCDC_AUTH_CdsExtrctnEnabled as t0
{
  key t0.viewname_raw                                                       as DataExtractionViewName,
      @Semantics.text:true
      t0.ddtext                                                             as DataExtractionViewDescription,
      @Semantics.booleanIndicator:true
      case
        when t0.release_state = 'C1' then cast('X' as abap_boolean)
                                     else cast('' as abap_boolean) end      as IsSAPReleasedView,
      @Semantics.booleanIndicator:true
      case
        when t0.isDeltaSupported = 'true' then cast('X' as abap_boolean)
                                          else cast('' as abap_boolean) end as DeltaChgDataCaptureIsSupported
}
```
