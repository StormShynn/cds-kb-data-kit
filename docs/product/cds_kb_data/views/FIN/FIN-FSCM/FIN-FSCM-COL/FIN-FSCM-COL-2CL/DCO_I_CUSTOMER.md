---
name: /DCO/I_CUSTOMER
description: "Customer"
semantic_vi: "View DCO_I_CUSTOMER hiển thị dữ liệu khách hàng, thường được sử dụng trong các dịch vụ tài chính và quản lý thu hồi. Nó cung cấp một bản xem xét dữ liệu khách hàng để phân tích và báo cáo."
keywords:
  - "customer"
  - "khách hàng"
  - "financial services"
  - "dịch vụ tài chính"
  - "collections management"
  - "quản lý thu hồi"
  - "sap"
  - "fscm"
  - "customer data"
  - "dữ liệu khách hàng"
semantic_en: "The DCO_I_CUSTOMER view exposes customer data, which is typically used in financial services and collections management. It provides a snapshot of customer information for analysis and reporting purposes."
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-COL
  - interface-view
  - customer
  - component:FIN-FSCM-COL-2CL
  - lob:Other
  - bo:Customer
---
# /DCO/I_CUSTOMER

**Customer**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Customer` | ✓ | |  | `customer` |  |  |
| `LogicalSystem` | ✓ | |  | `logical_system` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `purpose_is_completed` |  |  |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #BLOCKED_DATA_EXCLUDED } }
@EndUserText: { label: 'Customer' }
@VDM: { viewType:  #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory:   #L,
                             dataClass:      #MASTER }, 
                supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE ] }
@Metadata: { ignorePropagatedAnnotations: true }

define view entity /DCO/I_Customer
  as select from /dco/kna1

{

      // VDM Fields
  key customer             as Customer,
  key logical_system       as LogicalSystem,

      purpose_is_completed as IsBusinessPurposeCompleted

}
```
