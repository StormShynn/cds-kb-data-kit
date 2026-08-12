---
name: C_PUBSECGTEEMGRANTKPIQRY
description: "Grant Overview KPI - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTKPIQRY')/$value
semantic_en: "Grant Overview KPI - Query"
semantic_vi: "Grant Overview KPI - Query — CDS view tiêu dùng dựa trên I_PubSecGteeMGrantKPICube."
keywords:
  - "grant"
  - "overview"
  - "kpi"
  - "query"
  - "number"
  - "gtee"
  - "master"
  - "data"
  - "records"
  - "global"
  - "currency"
  - "revn"
  - "actl"
  - "crcy"
  - "bdgt"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_PUBSECGTEEMGRANTKPIQRY

**Grant Overview KPI - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTKPIQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GrantID` | ✓ | |  |  | `CHAR(20)` | Grant |
| `NumberOfGteeMMasterDataRecords` |  | |  |  | `INT1(3)` |  |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `PubSecRevnActlAmtInGlobalCrcy` |  | |  |  | `CURR(23)` |  |
| `BdgtAvailableAmtInGlobalCrcy` |  | |  |  | `CURR(24)` |  |
| `NotPaidRevenueAmtInGCrcy` |  | |  |  | `CURR(23)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTKPIQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PUBSECGTEEMGRANTKPIQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CGMGRNTKPIQRY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant Overview KPI - Query'
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #L
     },
      supportedCapabilities:[#ANALYTICAL_QUERY],
      modelingPattern: #ANALYTICAL_QUERY

    }
@Analytics.query:true
@OData.publish: true
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations:true
define view C_PubSecGteeMGrantKPIQry
  as select from I_PubSecGteeMGrantKPICube
{

  key GrantID,
      @EndUserText.label: 'Master Data Records'
      NumberOfGteeMMasterDataRecords,
      GlobalCurrency,
      @EndUserText.label: 'Revenue Amount in Global Currency'
      PubSecRevnActlAmtInGlobalCrcy,
      @EndUserText.label: 'Available Budget in Global Currency'
      BdgtAvailableAmtInGlobalCrcy,
      @EndUserText.label: 'Unpaid Billed Amount in Global Currency'
      NotPaidRevenueAmtInGCrcy
}
```
