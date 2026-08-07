---
name: I_DEBITCREDITCODE
description: Debitcreditcode
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - credit
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_DEBITCREDITCODE

**Debitcreditcode**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DebitCreditCode` | ✓ | |  | `cast( domvalue_l as fis_shkzg )` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_DebitCreditCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Debit Credit Code'
@Analytics: { 
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true 
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIDECRECODE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {representativeKey: 'DebitCreditCode', 
               sapObjectNodeType.name: 'DebitCreditCode', 
               modelingPattern: #ANALYTICAL_DIMENSION,
               resultSet: { sizeCategory: #XS },
               supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE],
               usageType: { sizeCategory: #S,
                            dataClass:  #CUSTOMIZING,
                            serviceQuality: #A }
               } 
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey:true

define view I_DebitCreditCode
as select from
dd07l
association [0..*] to I_DebitCreditCodeText as _Text on $projection.DebitCreditCode = _Text.DebitCreditCode
{
@ObjectModel.text.association: '_Text'
    key cast( domvalue_l as fis_shkzg ) as DebitCreditCode,
    _Text    
}
where dd07l.domname = 'SHKZG' and dd07l.as4local = 'A' and dd07l.as4vers  = '0000';
```
