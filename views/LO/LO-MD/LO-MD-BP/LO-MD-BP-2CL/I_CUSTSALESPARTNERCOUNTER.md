---
name: I_CUSTSALESPARTNERCOUNTER
description: Custsalespartnercounter
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
  - partner
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTSALESPARTNERCOUNTER

**Custsalespartnercounter**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PartnerCounter` | ✓ | |  | `parza` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICUSTPARTCOUNTER'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey:'PartnerCounter'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE 
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Partner Counter'
@ObjectModel.supportedCapabilities: #SQL_DATA_SOURCE
@Metadata.ignorePropagatedAnnotations: true
define view I_CustSalesPartnerCounter as select distinct from knvp {
   key parza as PartnerCounter
}
```
