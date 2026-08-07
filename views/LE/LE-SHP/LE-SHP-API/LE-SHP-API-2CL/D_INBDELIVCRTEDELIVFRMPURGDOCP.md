---
name: D_INBDELIVCRTEDELIVFRMPURGDOCP
description: D Inbdelivcrtedelivfrmpurgdocp
app_component: LE-SHP-API-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-API
  - component:LE-SHP-API-2CL
  - lob:Logistics Execution
---
# D_INBDELIVCRTEDELIVFRMPURGDOCP

**D Inbdelivcrtedelivfrmpurgdocp**

| Property | Value |
|---|---|
| App Component | `LE-SHP-API-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Supplier` |  | |  | `lifnr` |
| `DeliveryDate` |  | |  | `lfdat_v` |
| `DeliveryTime` |  | |  | `lfuhr` |
| `DeliveryDocumentBySupplier` |  | |  | `lifex` |
| `MeansOfTransportType` |  | |  | `traty` |
| `MeansOfTransport` |  | |  | `traid` |

## Source Code

```abap
@EndUserText.label: 'Inb Deliv Crte Deliv Frm Purg Doc Param'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_InbDelivCrteDelivFrmPurgDocP
{
  Supplier                   : lifnr;
  DeliveryDate               : lfdat_v;
  DeliveryTime               : lfuhr;
  DeliveryDocumentBySupplier : lifex;
  MeansOfTransportType       : traty;
  MeansOfTransport           : traid;
  _ReferencePurgDocumentItem  : association [1..*] to D_InbDelivCrteFrmPurgDocItemP on 1 = 0;
}
```
