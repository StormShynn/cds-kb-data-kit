---
name: I_SUPLREVALRSPSUPPLIERAPI01
description: "Suplrevalrspsupplierapi 01"
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - supplier
  - component:SLC-EVL
  - lob:Other
  - bo:Supplier
---
# I_SUPLREVALRSPSUPPLIERAPI01

**Suplrevalrspsupplierapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrEvalRspPartyUUID` | ✓ | |  |  |  |  |
| `SuplrEvalRspUUID` |  | |  |  |  |  |
| `BusinessPartner` |  | |  |  |  |  |
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
| `Supplier` |  | |  |  |  |  |
| `_Supplier` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISERSSUPPTYAPI01'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Supplier Party for Suplr Eval Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities:
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalRspSupplierAPI01
  as select from I_SupplierEvalRespSuplrParty
{
  key SuplrEvalRspPartyUUID,
      SuplrEvalRspUUID,
      BusinessPartner,
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
      @UI.hidden: true
      Supplier,

      @Consumption.hidden: true
      _Supplier
}
```
