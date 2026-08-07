---
name: I_CNSLDTNFSITEMCUSTSPCFCTEXT
description: "Cnsldtnfsitemcustspcfctext"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - text-view
  - text
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMCUSTSPCFCTEXT

**Cnsldtnfsitemcustspcfctext**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_FSItemAttribValueTxt` | `Language` |  |  |
| `CnsldtnFSItemCustomerSpecific` | ✓ | |  | `cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemcustomerspecific preserving type )` |  |  |
| `CnsldtnFSItemCustSpcfcText` |  | | `_FSItemAttribValueTxt` | `CnsldtnFSItemAttribValueText` |  |  |
| `CnsldtnFSItemCustSpcfcLongText` |  | | `_FSItemAttribValueTxt` | `CnsldtnFSItemAttribValLongText` |  |  |
| `_CnsldtnFSItemCustSpcfc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnFSItemCustSpcfc` | `I_CnsldtnFSItemCustSpcfc` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFSICUSTT',
  compiler.compareFilter: true,
  preserveKey: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        serviceQuality: #A,
        sizeCategory: #S
    },
    dataCategory: #TEXT,
    representativeKey: 'CnsldtnFSItemCustomerSpecific',
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'FS Item Other Selection - Text'

define view I_CnsldtnFSItemCustSpcfcText
  as select from P_CnsldtnFSItemAttribValueTxt(P_CnsldtnFSItemAttribute : '007') as _FSItemAttribValueTxt

  association [1..1] to I_CnsldtnFSItemCustSpcfc as _CnsldtnFSItemCustSpcfc on $projection.CnsldtnFSItemCustomerSpecific = _CnsldtnFSItemCustSpcfc.CnsldtnFSItemCustomerSpecific
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _FSItemAttribValueTxt.Language,

  key cast( _FSItemAttribValueTxt.CnsldtnFSItemAttributeValue as fincs_fsitemcustomerspecific preserving type ) as CnsldtnFSItemCustomerSpecific,

      @Semantics.text
      @Search: {
        defaultSearchElement: true,
        ranking: #LOW,
        fuzzinessThreshold: 0.7
      }
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValueText                                                        as CnsldtnFSItemCustSpcfcText,

      @Semantics.text
      _FSItemAttribValueTxt.CnsldtnFSItemAttribValLongText                                                      as CnsldtnFSItemCustSpcfcLongText,


      _FSItemAttribValueTxt._Language,
      _CnsldtnFSItemCustSpcfc
}
```
