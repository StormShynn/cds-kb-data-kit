---
name: D_SELECTCUSTOMIZINGTRANSPTREQP
description: "D Selectcustomizingtransptreqp"
semantic_vi: "View này hiển thị dữ liệu tùy chỉnh yêu cầu vận chuyển, được sử dụng để quản lý yêu cầu vận chuyển trong hệ thống SAP. Nó thường được sử dụng bởi các nhà phát triển để lấy và cập nhật cài đặt tùy chỉnh yêu cầu vận chuyển."
keywords:
  - "transport request"
  - "yêu cầu vận chuyển"
  - "customizing"
  - "cài đặt tùy chỉnh"
  - "sap"
  - "basis components"
  - "bc-cus-tol-mbc"
  - "transport"
  - "trkorr"
semantic_en: "This view exposes transport request customizing data, which is used to manage transport requests in SAP systems. It is typically used by developers to retrieve and update transport request customizing settings."
app_component: BC-CUS-TOL-MBC
software_component: SAP_BASIS
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-CUS
  - BC-CUS-TOL
  - component:BC-CUS-TOL-MBC
  - lob:Basis Components
---
# D_SELECTCUSTOMIZINGTRANSPTREQP

**D Selectcustomizingtransptreqp**

| Property | Value |
|---|---|
| App Component | `BC-CUS-TOL-MBC` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `trkorr` |  | |  | `[ { entity.name : 'C_OpenCustomizingRequestVH', entity.element : 'TransportRequestID', label : 'Select Customizing Transport Request' } ] @EndUserText.label: 'Customizing Transport Request' key TransportRequestID : trkorr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Select Customizing Transport Request'
@VDM.usage.type: [ #ACTION_PARAMETER_STRUCTURE]
define abstract entity D_SelectCustomizingTransptReqP
{
      @Consumption.valueHelpDefinition:
      [
        { entity.name    : 'C_OpenCustomizingRequestVH',
          entity.element : 'TransportRequestID',
          label          : 'Select Customizing Transport Request' }
      ]
  @EndUserText.label: 'Customizing Transport Request'    
  key TransportRequestID : trkorr;
}
```
