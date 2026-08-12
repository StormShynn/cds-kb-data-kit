---
name: I_PRODUNITOFMEASURETEXTBASIC
description: "PRODUnit of MeasureTEXTBASIC"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - unit-of-measure
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUNITOFMEASURETEXTBASIC

**PRODUnit of MeasureTEXTBASIC**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProductUnit` | ✓ | |  | `meinh` |  |  |
| `ProductUnitTextSeqNum` | ✓ | |  | `lfdnr` |  |  |
| `ProductUnitShortTextCode` | ✓ | |  | `mtxid` |  |  |
| `ProductDescription` |  | |  | `maktm` |  |  |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
             sqlViewName: 'IPRDUOMTEXTBASIC',
             compiler.compareFilter : true,
             preserveKey: true
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Info for Product per Unit of Measure'
@ObjectModel:{
            usageType:{
            serviceQuality: #A,
            sizeCategory :  #L,
            dataClass    :  #MASTER
            },
            supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET                                               
  ]
}
@Metadata.ignorePropagatedAnnotations: true 
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_ProdUnitOfMeasureTextBasic
  as select from mamt
 association [1..1] to I_Product  as _Product  on $projection.Product = _Product.Product
{

  key mamt.matnr as Product,
  key mamt.spras as Language,
  key mamt.meinh as ProductUnit,
  key mamt.lfdnr as ProductUnitTextSeqNum,
  key mamt.mtxid as ProductUnitShortTextCode,
      mamt.maktm as ProductDescription,
      
      _Product
}
```
