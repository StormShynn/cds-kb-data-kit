---
name: I_SUPPLIERCOMPANYBYPLANT
description: Suppliercompanybyplant
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
  - supplier
  - plant
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
  - bo:Plant
---
# I_SUPPLIERCOMPANYBYPLANT

**Suppliercompanybyplant**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  |  |  |
| `Supplier` | ✓ | |  |  |  |  |
| `ValuationArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `IsBusinessPurposeCompleted` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Supplier Company by Plant'
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
define view entity I_SupplierCompanyByPlant 
as select from I_Plant as plant 
inner join I_Purreqvaluationarea as val on plant.ValuationArea = val.ValuationArea -- to one JOIN
inner join I_SupplierCompany on val.CompanyCode = I_SupplierCompany.CompanyCode -- to many JOIN
{
    key plant.Plant,
    @ObjectModel.foreignKey.association: '_Supplier'
    @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_Supplier_VH',
                   element: 'Supplier' }
      }]
    key I_SupplierCompany.Supplier,
    val.ValuationArea,
    val.CompanyCode,
    I_SupplierCompany.AuthorizationGroup,
    
    -- fields and associations for authorization checks
--    @Semantics.booleanIndicator: true          removed because of P2 ATC compatibility error
    I_SupplierCompany.IsBusinessPurposeCompleted,
    I_SupplierCompany._Supplier
} where plant.ValuationArea <> ''
```
