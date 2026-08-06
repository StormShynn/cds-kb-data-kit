---
name: I_SUPLREVALRSPREQUESTREFAPI01
description: Suplrevalrsprequestrefapi 01
app_component: SLC-EVL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-EVL
  - interface-view
  - component:SLC-EVL
  - lob:Other
---
# I_SUPLREVALRSPREQUESTREFAPI01

**Suplrevalrsprequestrefapi 01**

| Property | Value |
|---|---|
| App Component | `SLC-EVL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SuplrEvalRspReferenceUUID` | `SuplrEvalRspReferenceUUID` |
| `SuplrEvalRspUUID` | `SuplrEvalRspUUID` |
| `SuplrEvalReqUUID` | `SuplrEvalReqUUID` |
| `SupplierEvalRequest` | `SupplierEvalRequest` |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ISESPREQREFAPI01'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Request Ref for Suplr Eval Response'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_SuplrEvalRspRequestRefAPI01
  as select from I_SupplierEvalRspRequestRef
{
  key SuplrEvalRspReferenceUUID,
      SuplrEvalRspUUID,
      SuplrEvalReqUUID,
      SupplierEvalRequest
}
```
