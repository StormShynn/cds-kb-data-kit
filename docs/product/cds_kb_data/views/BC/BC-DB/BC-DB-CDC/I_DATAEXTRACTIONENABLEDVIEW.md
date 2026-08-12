---
name: I_DATAEXTRACTIONENABLEDVIEW
description: "CDS Views enabled for Data Extraction"
app_component: BC-DB-CDC
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
