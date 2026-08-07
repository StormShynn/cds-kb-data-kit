---
name: I_PURGCATSUPPLIERAPI01
description: Purgcatsupplierapi 01
app_component: SLC-CAT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-CAT
  - interface-view
  - supplier
  - component:SLC-CAT-2CL
  - lob:Other
  - bo:Supplier
---
# I_PURGCATSUPPLIERAPI01

**Purgcatsupplierapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-CAT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgCatPartyUUID` | ✓ | |  |  |  |  |
| `PurgCatUUID` |  | |  |  |  |  |
| `BusinessPartnerUUID` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `DataControllerSet` |  | |  |  |  |  |
| `DataController1` |  | |  |  |  |  |
| `DataController2` |  | |  |  |  |  |
| `DataController3` |  | |  |  |  |  |
| `DataController4` |  | |  |  |  |  |
| `DataController5` |  | |  |  |  |  |
| `DataController6` |  | |  |  |  |  |
| `DataController7` |  | |  |  |  |  |
| `DataController8` |  | |  |  |  |  |
| `DataController9` |  | |  |  |  |  |
| `DataController10` |  | |  |  |  |  |
| `_Supplier` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPUCSUPLRAPI01'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities:
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Supplier Referenced by Purg Category'
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_PurgCatSupplierAPI01
  as select from I_PurchasingCategorySupplier
{
  key PurgCatPartyUUID,
      PurgCatUUID,
      BusinessPartnerUUID,
      BusinessPartner,
      Supplier,
      AuthorizationGroup,

      @UI.hidden: true
      @Consumption.hidden: true
      DataControllerSet,
      @Consumption.hidden: true
      @UI.hidden: true
      DataController1,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController2,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController3,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController4,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController5,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController6,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController7,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController8,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController9,
      @UI.hidden: true
      @Consumption.hidden: true
      DataController10,

      @Consumption.hidden: true
      _Supplier
}
```
