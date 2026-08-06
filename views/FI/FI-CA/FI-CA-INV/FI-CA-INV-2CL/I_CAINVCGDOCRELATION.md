---
name: I_CAINVCGDOCRELATION
description: Cainvcgdocrelation
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCRELATION

**Cainvcgdocrelation**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAInvcgReferenceObject` | `refobjname` |
| key `CAReferenceObjectID` | `refobjvalue` |
| key `CAInvcgCreationDate` | `crdate` |
| key `CAInvoicingDocument` | `invdocno` |
| `CAInvcgIsDocumentPosted` | `invoiced` |
| `CAInvcgIsDocumentSimulated` | `simulated` |
| `CAInvcgIsDocumentPreliminary` | `cast(preliminary as inv_preliminary_gfn_kk preserving type)` |
| `CAReferenceObjectAddlText` | `cast(refobjvalue2 as inv_refobjvalue2_gfn_kk preserving type)` |
| `_CAInvcgReferenceObj` | *Association* |
| `_CAInvcgDocHeader` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgReferenceObj` | `I_CAInvcgReferenceObj` | [0..1] |
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Fakturierungsbelegobjektverknüpfungen'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  usageType: {
    serviceQuality: #A,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  sapObjectNodeType.name: 'ContrAcctgInvcgDocRelation',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CAInvcgDocRelation
  as select from dfkkinvdoc_x
  association [0..1] to I_CAInvcgReferenceObj as _CAInvcgReferenceObj on $projection.CAInvcgReferenceObject = _CAInvcgReferenceObj.CAInvcgReferenceObject
  association [0..1] to I_CAInvcgDocHeader    as _CAInvcgDocHeader    on $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
{
      @ObjectModel.foreignKey.association: '_CAInvcgReferenceObj'
  key refobjname                                                    as CAInvcgReferenceObject,
  key refobjvalue                                                   as CAReferenceObjectID,
      @Semantics.systemDate.createdAt: true
  key crdate                                                        as CAInvcgCreationDate,
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno                                                      as CAInvoicingDocument,
      invoiced                                                      as CAInvcgIsDocumentPosted,
      simulated                                                     as CAInvcgIsDocumentSimulated,
      cast(preliminary as inv_preliminary_gfn_kk preserving type)   as CAInvcgIsDocumentPreliminary,
      cast(refobjvalue2 as inv_refobjvalue2_gfn_kk preserving type) as CAReferenceObjectAddlText,

      // Make association public
      _CAInvcgReferenceObj,
      _CAInvcgDocHeader
}
```
