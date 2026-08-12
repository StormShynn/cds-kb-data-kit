---
name: I_CUSTDEPARTMENTADDRDEPDNTINFO
description: "Custdepartmentaddrdepdntinfo"
app_component: LO-MD-BP-2CL
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
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTDEPARTMENTADDRDEPDNTINFO

**Custdepartmentaddrdepdntinfo**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
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
| `Customer` | ✓ | |  | `locnr` |  |  |
| `AddressID` | ✓ | |  | `adrnr` |  |  |
| `CustomerDepartment` | ✓ | |  | `abtnr` |  |  |
| `ReceivingPoint` |  | |  | `empst` |  |  |
| `RetailLocationSellingAreaSize` |  | |  | `verfl` |  |  |
| `RetailLocationSellingAreaUnit` |  | |  | `verfe` |  |  |
| `DepartmentLayout` |  | |  | `layvr` |  |  |
| `DepartmentLayoutAreaSchema` |  | |  | `flvar` |  |  |
| `_Customer` | | ✓ | | | | |
| `_AddressDefaultRepresentation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Customer` | `I_Customer` | [1..1] |
| `_AddressDefaultRepresentation` | `I_Address_2` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSDEPADDEP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: [ '_AddressDefaultRepresentation']
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Department dependent on Customer Address'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.representativeKey: 'AddressID'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@VDM.viewType: #BASIC
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_CustDepartmentAddrDepdntInfo
  as select from wrf4_addr
  association [1..1] to I_Customer  as _Customer                     on  $projection.Customer = _Customer.Customer
  association [1..1] to I_Address_2 as _AddressDefaultRepresentation on  $projection.AddressID                                   = _AddressDefaultRepresentation.AddressID
                                                                     and _AddressDefaultRepresentation.AddressRepresentationCode = ' '
{
      @ObjectModel.foreignKey.association: '_Customer'
  key locnr as Customer,
  key adrnr as AddressID,
  key abtnr as CustomerDepartment,
      empst as ReceivingPoint,
      @Semantics.quantity.unitOfMeasure: 'RetailLocationSellingAreaUnit'
      verfl as RetailLocationSellingAreaSize,
      verfe as RetailLocationSellingAreaUnit,
      layvr as DepartmentLayout,
      flvar as DepartmentLayoutAreaSchema,
      _Customer,
      _AddressDefaultRepresentation
}
```
