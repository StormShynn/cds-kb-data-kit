---
name: I_SUPPLIERPARTNERCOUNTER
description: "Supplierpartnercounter"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERPARTNERCOUNTER

**Supplierpartnercounter**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PartnerCounter` | ✓ | |  | `parza` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPPARTCOUNTER'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey:'PartnerCounter'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Supplier Partner Counter'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@Metadata.ignorePropagatedAnnotations: true
define view I_SupplierPartnerCounter as select distinct from wyt3 {
   key parza as PartnerCounter
}
```
