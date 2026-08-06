---
name: I_CUSTOMERRETURNTYPE
description: Customerreturntype
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - interface-view
  - customer
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNTYPE

**Customerreturntype**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CustomerReturnType` | `SalesDocumentType` |
| `SDDocumentCategory` | `SDDocumentCategory` |
| `RetsMgmtIsActive` | `RetsMgmtIsActive` |
| `_Text` | *Association* |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISDCUSTRETTYPE'
@ObjectModel: {
  representativeKey: 'CustomerReturnType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                          #CDS_MODELING_ASSOCIATION_TARGET, 
                          #EXTRACTION_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE,
                          #SQL_DATA_SOURCE],
  usageType: {
    dataClass:      #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory:   #S
   }
}
@ObjectModel.sapObjectNodeType.name: 'CustomerReturnType'
@Analytics: {dataCategory: #DIMENSION,
             dataExtraction.enabled: true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@EndUserText.label: 'Returns Order Types'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view I_CustomerReturnType
  as select from I_SalesDocumentType
  
{
      //Key
      @ObjectModel.text.association: '_Text'
  key SalesDocumentType           as CustomerReturnType,
      SDDocumentCategory, 
      @Semantics.booleanIndicator 
      RetsMgmtIsActive,
  
      //Association
      _Text
}
where SDDocumentCategory = 'H'
```
