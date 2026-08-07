---
name: I_ASSETREDESIGNSWITCHSTATUS
description: Asset Accounting Redesign Switch Status
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETREDESIGNSWITCHSTATUS')/$value
semantic_en: Asset Accounting Redesign Switch Status
semantic_vi: Asset Accounting Redesign Switch Status — CDS view giao diện dựa trên P_TF_AssetRedesignSwitchStatus.
keywords:
  - asset
  - accounting
  - redesign
  - switch
  - status
  - active
tags:
  - FI
  - account
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
---
# I_ASSETREDESIGNSWITCHSTATUS

**Asset Accounting Redesign Switch Status**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETREDESIGNSWITCHSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetRedesignSwitchIsActive` | ✓ | |  | `IsActive` | `CHAR(1)` | Single-Character Flag |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETREDESIGNSWITCHSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETREDESIGNSWITCHSTATUS')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIASTRDSGSWTCH', preserveKey: true, compiler.compareFilter: true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Asset Accounting Redesign Switch Status'
@VDM.viewType: #BASIC
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #NONE,
                supportedCapabilities: [#DERIVATION_FUNCTION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetRedesignSwitchStatus
  as select from P_TF_AssetRedesignSwitchStatus( P_SAPClient : $session.client )
{
      @Semantics.booleanIndicator
  key IsActive as AssetRedesignSwitchIsActive
}
```
