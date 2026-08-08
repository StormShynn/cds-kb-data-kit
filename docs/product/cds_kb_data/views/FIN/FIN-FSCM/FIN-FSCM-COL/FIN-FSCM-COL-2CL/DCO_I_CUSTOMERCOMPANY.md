---
name: /DCO/I_CUSTOMERCOMPANY
description: "Customer Company"
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
# /DCO/I_CUSTOMERCOMPANY

**Customer Company**

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
| `CompanyCode` | ✓ | |  | `company_code` |  |  |
| `LogicalSystem` | ✓ | |  | `logical_system` |  |  |
| `IsBusinessPurposeCompleted` |  | |  | `purpose_is_completed` |  |  |
| `AccountingClerk` |  | |  | `accounting_clerk` |  |  |
| `AccountByCustomer` |  | |  | `account_at_customer` |  |  |
| `CustomerHeadOffice` |  | |  | `head_office` |  |  |
| `AccountingClerkInternetAddress` |  | |  | `internet_address` |  |  |
| `DunningClerk` |  | |  | `dunning_clerk` |  |  |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #BLOCKED_DATA_EXCLUDED } }
@EndUserText: { label: 'Customer Company' }
@VDM: { viewType:  #BASIC,
        lifecycle: { contract: { type: #PUBLIC_LOCAL_API } } }
@ObjectModel: { usageType: { serviceQuality: #A,
                             sizeCategory:   #L,
                             dataClass:      #MASTER },
                supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE ] }
@Metadata: { ignorePropagatedAnnotations: true }

define view entity /DCO/I_CustomerCompany
  as select from /dco/knb1
{

      // VDM fields
  key customer             as Customer,
  key company_code         as CompanyCode,
  key logical_system       as LogicalSystem,

      purpose_is_completed as IsBusinessPurposeCompleted,
      accounting_clerk     as AccountingClerk,
      account_at_customer  as AccountByCustomer,
      head_office          as CustomerHeadOffice,
      internet_address     as AccountingClerkInternetAddress,
      dunning_clerk        as DunningClerk

}
```
