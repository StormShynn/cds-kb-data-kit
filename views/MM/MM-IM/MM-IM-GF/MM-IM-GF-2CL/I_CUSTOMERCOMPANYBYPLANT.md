---
name: I_CUSTOMERCOMPANYBYPLANT
description: Customer CompanyBYPLANT
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - interface-view
  - customer
  - plant
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Customer
  - bo:Plant
---
# I_CUSTOMERCOMPANYBYPLANT

**Customer CompanyBYPLANT**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Plant` | `plant.Plant` |
| key `Customer` | `I_CustomerCompany.Customer` |
| `ValuationArea` | `val.ValuationArea` |
| `CompanyCode` | `val.CompanyCode` |
| `AuthorizationGroup` | `I_CustomerCompany.AuthorizationGroup` |
| `IsBusinessPurposeCompleted` | `I_CustomerCompany.IsBusinessPurposeCompleted` |

## Source Code

```abap
@EndUserText.label: 'Customer Company by Plant'
@AccessControl: {
                  authorizationCheck: #CHECK,
                  personalData.blocking: #REQUIRED
                }
@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #C,
                             dataClass:#MASTER
                           },
                supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
              }
@VDM: {
        lifecycle.contract.type: #PUBLIC_LOCAL_API, 
        viewType: #COMPOSITE
      }
@Metadata.ignorePropagatedAnnotations:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_CustomerCompanyByPlant
as select from I_Plant as plant 
inner join I_Purreqvaluationarea as val on plant.ValuationArea = val.ValuationArea -- to one JOIN
inner join I_CustomerCompany on val.CompanyCode = I_CustomerCompany.CompanyCode -- to many JOIN
{
    key plant.Plant,
    @ObjectModel.foreignKey.association: '_Customer'
    @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_Customer_VH',
                   element: 'Customer' }
      }]
    key I_CustomerCompany.Customer,
    val.ValuationArea,
    val.CompanyCode,
    I_CustomerCompany.AuthorizationGroup,
    
    -- fields and associations for authorization checks
--    @Semantics.booleanIndicator: true          removed because of P2 ATC compatibility error
    I_CustomerCompany.IsBusinessPurposeCompleted,
    I_CustomerCompany._Customer
} where plant.ValuationArea <> ''
```
