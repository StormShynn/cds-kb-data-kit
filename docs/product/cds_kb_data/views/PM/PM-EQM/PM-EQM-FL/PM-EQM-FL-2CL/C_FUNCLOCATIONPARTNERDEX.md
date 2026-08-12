---
name: C_FUNCLOCATIONPARTNERDEX
description: "Functional Location Partner"
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCLOCATIONPARTNERDEX')/$value
semantic_en: "Functional Location Partner"
semantic_vi: "Functional Location Partner — CDS view tiêu dùng dựa trên I_PlantMaintenancePartner."
keywords:
  - "functional"
  - "location"
  - "partner"
  - "maint"
  - "object"
  - "internal"
  - "function"
  - "maintenance"
  - "number"
  - "category"
tags:
  - PM
  - component:PM-EQM-FL-2CL
  - consumption-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-FL
  - PM-EQM-FL-2CL
---
# C_FUNCLOCATIONPARTNERDEX

**Functional Location Partner**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCLOCATIONPARTNERDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintObjectInternalID` | ✓ | |  |  | `CHAR(22)` | Object Number |
| `PartnerFunction` | ✓ | |  |  | `CHAR(2)` | Partner Function |
| `MaintenancePartnerObjectNumber` | ✓ | |  |  | `NUMC(6)` | Counter for differentiation 6-digit |
| `FunctionalLocation` |  | |  | `cast( Location.FunctionalLocation as ps_s4_tplnr preserving type )` | `CHAR(30)` | Functional Location |
| `MaintObjectCategory` |  | |  |  | `CHAR(3)` | Object Category |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Added |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `MaintenancePartner` |  | |  |  | `CHAR(12)` | Partner |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCLOCATIONPARTNERDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCLOCATIONPARTNERDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED }
@EndUserText.label: 'Functional Location Partner'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.sapObjectNodeType.name: 'FunctionalLocationPartner'
@Analytics.dataExtraction: {
  enabled: true,
    delta.changeDataCapture: {
      mapping: [{
        role: #MAIN,
        table: 'ihpa',
        viewElement: [ 'MaintObjectInternalID', 'PartnerFunction', 'MaintenancePartnerObjectNumber' ],
        tableElement: [ 'objnr', 'parvw', 'counter' ]
      }]
    }
}
@ObjectModel: {
  usageType: {
    dataClass: #MIXED,
    sizeCategory: #XL,
    serviceQuality: #C
  },
  supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #ANALYTICAL_FACT
}
define view entity C_FuncLocationPartnerDEX
  as select from I_PlantMaintenancePartner as Partner
    inner join   I_FunctionalLocation      as Location on Location.MaintObjectInternalID = Partner.MaintObjectInternalID

{
      /* start suppress warning shlporigin_not_inherited */
  key Partner.MaintObjectInternalID,
  key Partner.PartnerFunction,
  key Partner.MaintenancePartnerObjectNumber,
      cast( Location.FunctionalLocation  as ps_s4_tplnr preserving type ) as FunctionalLocation,
      Partner.MaintObjectCategory,
      Partner.CreatedByUser,
      Partner.CreationDate,
      Partner.CreationTime,
      Partner.LastChangedByUser,
      Partner.LastChangeTime,
      Partner.LastChangeDate,
      Partner.MaintenancePartner,
      /* end suppress warning shlporigin_not_inherited */

      Partner._PartnerFunction
}
```
