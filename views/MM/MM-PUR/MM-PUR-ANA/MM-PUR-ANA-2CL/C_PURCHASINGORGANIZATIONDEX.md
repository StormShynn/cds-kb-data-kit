---
name: C_PURCHASINGORGANIZATIONDEX
description: Purchasingorganizationdex
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:PurchasingOrganization
---
# C_PURCHASINGORGANIZATIONDEX

**Purchasingorganizationdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingOrganization` | ✓ | |  |  |  |  |
| `PurchasingOrganizationName` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel: {
                representativeKey: 'PurchasingOrganization',
                usageType.dataClass: #ORGANIZATIONAL,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #S,
                supportedCapabilities: #EXTRACTION_DATA_SOURCE
              }
@EndUserText.label: 'Purchasing Organization Data Extraction'
@VDM.viewType: #CONSUMPTION
@Analytics.internalName:#LOCAL

@Analytics: {
              dataCategory: #DIMENSION,
              dataExtraction.enabled: true
            }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'CMMPURORGDX'
@Metadata: {
              allowExtensions: true,
              ignorePropagatedAnnotations:true
           }
@ObjectModel.sapObjectNodeType.name: 'PurchasingOrganization'

define view C_PurchasingOrganizationDEX
  as select from I_PurchasingOrganization
{
      @ObjectModel.text.element : 'PurchasingOrganizationName'
  key PurchasingOrganization          as PurchasingOrganization,
      
      @Semantics.text: true
      PurchasingOrganizationName      as PurchasingOrganizationName,
      
      CompanyCode                     as CompanyCode
      
}
```
