---
name: I_SALESDOCREPRICINGPRICINGTYPE
description: "Salesdocrepricingpricingtype"
app_component: SD-SLS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - interface-view
  - pricing
  - component:SD-SLS-2CL
  - lob:Sales & Distribution
---
# I_SALESDOCREPRICINGPRICINGTYPE

**Salesdocrepricingpricingtype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'ISDREPRCPRCTYPE',
  compiler.compareFilter: true,
  preserveKey: true
}

@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
  usageType: {
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #META
  },
  resultSet.sizeCategory: #XS,
  representativeKey: 'PricingType',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY ]
}

@VDM.viewType: #BASIC

@Search.searchable: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations:true

@EndUserText.label: 'Pricing Type for Repricing of Sales Doc'
define view I_SalesDocRepricingPricingType
  as select from I_RepricingPricingType as RepricingPricingType
  
{

       @ObjectModel.text.association: '_Text'
  key  PricingType,

       @Search.defaultSearchElement: true
       _Text

}

where
     PricingType = 'B' // Carry out new pricing
  or PricingType = 'C' // Copy manual price elements and redetermine the others
  or PricingType = 'G' // Copy price elements unchanged and redetermine taxes
```
