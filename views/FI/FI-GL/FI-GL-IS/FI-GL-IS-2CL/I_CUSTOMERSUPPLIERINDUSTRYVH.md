---
name: I_CUSTOMERSUPPLIERINDUSTRYVH
description: Customersupplierindustryvh
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - customer
  - supplier
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Customer
  - bo:Supplier
---
# I_CUSTOMERSUPPLIERINDUSTRYVH

**Customersupplierindustryvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Industry` | `Industry` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Customer Supplier Industry'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {representativeKey: 'Industry', 
               dataCategory: #VALUE_HELP,
               supportedCapabilities: [ #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY ],
               modelingPattern: #VALUE_HELP_PROVIDER,
               usageType: {
                            dataClass: #MASTER,
                            serviceQuality: #A,
                            sizeCategory: #S
                           }
              }
@Search.searchable: true
@Consumption.ranked: true
@VDM.viewType: #BASIC
                  
define view entity I_CustomerSupplierIndustryVH as select from I_CustomerSupplierIndustry
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key Industry,
      /* Associations */
      //I_CustomerSupplierIndustryText
      _Text
}
```
