---
name: I_PRICINGINCOMPLETIONSTATUS
description: "Pricingincompletionstatus"
app_component: SD-SLS-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - interface-view
  - pricing
  - status
  - component:SD-SLS-GF-2CL
  - lob:Sales & Distribution
---
# I_PRICINGINCOMPLETIONSTATUS

**Pricingincompletionstatus**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingIncompletionStatus` | ✓ | |  | `substring(dd07l.domvalue_l, 1, 1)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PricingIncompletionStatusT` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 

@AbapCatalog: {
  sqlViewName: 'ISDPRICINCOMSTS',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #BASIC

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  representativeKey: 'PricingIncompletionStatus',
  resultSet.sizeCategory: #XS,
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S 
  },
  supportedCapabilities:[ #SQL_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #ANALYTICAL_DIMENSION,
                          #EXTRACTION_DATA_SOURCE,
                          #SEARCHABLE_ENTITY ],
  sapObjectNodeType.name: 'SalesDocPricingIncompletionSts'
}

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true     

@EndUserText.label: 'Pricing Incompletion Status'                                   
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_PricingIncompletionStatus 
as select from dd07l

association [0..*] to I_PricingIncompletionStatusT as _Text on $projection.PricingIncompletionStatus = _Text.PricingIncompletionStatus
{
    @ObjectModel.text.association: '_Text'
    key substring(dd07l.domvalue_l, 1, 1) as PricingIncompletionStatus,
    
    @Search.defaultSearchElement: true
    _Text  
}
where (dd07l.domname = 'STATV') and (dd07l.as4local = 'A')
  and ((dd07l.domvalue_l = 'A') or (dd07l.domvalue_l = 'C'));
```
