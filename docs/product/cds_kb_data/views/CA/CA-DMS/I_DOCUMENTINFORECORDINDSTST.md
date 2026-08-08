---
name: I_DOCUMENTINFORECORDINDSTST
description: "Documentinforecordindstst"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-DMS
  - interface-view
  - document
  - component:CA-DMS
  - lob:Cross-Application Components
---
# I_DOCUMENTINFORECORDINDSTST

**Documentinforecordindstst**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocNumber` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocType` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocVersion` | ✓ | |  |  |  |  |
| `DocumentInfoRecordDocPart` | ✓ | |  |  |  |  |
| `DocInfoRecdIsMarkedForDeletion` |  | |  |  |  |  |
| `IsDocInfoRecdStructure` |  | |  |  |  |  |
| `IsDocInfoRecdCreatedFromCAD` |  | |  |  |  |  |
| `_DocType` | | ✓ | | | | |
| `_DocNumber` | | ✓ | | | | |
| `_DocVersion` | | ✓ | | | | |
| `_DocPart` | | ✓ | | | | |
| `_DeltnStatusText` | | ✓ | | | | |
| `_StrucStatusText` | | ✓ | | | | |
| `_CadStatusText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocType` | `I_DocumentInfoRecordDocType` | [0..1] |
| `_DocNumber` | `I_DocumentInfoRecordDocNumber` | [1..1] |
| `_DocVersion` | `I_DocumentInfoRecordDocVersion` | [0..1] |
| `_DocPart` | `I_DocumentInfoRecordDocPrt` | [0..1] |
| `_DeltnStatusText` | `I_DocumentInfoRecordDeltnStsT` | [0..*] |
| `_StrucStatusText` | `I_DocumentInfoRecordStrucStsT` | [0..*] |
| `_CadStatusText` | `I_DocumentInfoRecordCADStsT` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICVDOCINDSTSTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:  #PRIVILEGED_ONLY
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'DocumentInfoRecordDocPart'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@EndUserText.label: 'Document Indicator Status Description - Text' 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_DocumentInfoRecordIndStsT
  as select from I_DocumentInfoRecordIndSts as IndicatorStatus

  --Get Document Type Association
  association [0..1] to I_DocumentInfoRecordDocType    as _DocType         on  $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType

  --Get Document Number Association
  association [1..1] to I_DocumentInfoRecordDocNumber  as _DocNumber       on  $projection.DocumentInfoRecordDocType   = _DocNumber.DocumentInfoRecordDocType
                                                                           and $projection.DocumentInfoRecordDocNumber = _DocNumber.DocumentInfoRecordDocNumber

  --Get Document Version Association
  association [0..1] to I_DocumentInfoRecordDocVersion as _DocVersion      on  $projection.DocumentInfoRecordDocType    = _DocVersion.DocumentInfoRecordDocType
                                                                           and $projection.DocumentInfoRecordDocNumber  = _DocVersion.DocumentInfoRecordDocNumber
                                                                           and $projection.DocumentInfoRecordDocVersion = _DocVersion.DocumentInfoRecordDocVersion

  --Get Document Part Association
  association [0..1] to I_DocumentInfoRecordDocPrt     as _DocPart         on  $projection.DocumentInfoRecordDocType    = _DocPart.DocumentInfoRecordDocType
                                                                           and $projection.DocumentInfoRecordDocPart    = _DocPart.DocumentInfoRecordDocPart
                                                                           and $projection.DocumentInfoRecordDocNumber  = _DocPart.DocumentInfoRecordDocNumber
                                                                           and $projection.DocumentInfoRecordDocVersion = _DocPart.DocumentInfoRecordDocVersion

  association [0..*] to I_DocumentInfoRecordDeltnStsT  as _DeltnStatusText on  $projection.DocInfoRecdIsMarkedForDeletion = _DeltnStatusText.DocInfoRecdIsMarkedForDeletion
  association [0..*] to I_DocumentInfoRecordStrucStsT  as _StrucStatusText on  $projection.IsDocInfoRecdStructure = _StrucStatusText.IsDocInfoRecordStructure
  association [0..*] to I_DocumentInfoRecordCADStsT    as _CadStatusText   on  $projection.IsDocInfoRecdCreatedFromCAD = _CadStatusText.IsDocInfoRecdCreatedFromCAD

{
      @ObjectModel.foreignKey.association: '_DocNumber'
  key IndicatorStatus.DocumentInfoRecordDocNumber    as DocumentInfoRecordDocNumber,
      @ObjectModel.foreignKey.association: '_DocType'
  key IndicatorStatus.DocumentInfoRecordDocType      as DocumentInfoRecordDocType,

      @ObjectModel.foreignKey.association: '_DocVersion'
  key IndicatorStatus.DocumentInfoRecordDocVersion   as DocumentInfoRecordDocVersion,
      @ObjectModel.foreignKey.association: '_DocPart'
  key IndicatorStatus.DocumentInfoRecordDocPart      as DocumentInfoRecordDocPart,
        @ObjectModel.text.association: '_DeltnStatusText'
      IndicatorStatus.DocInfoRecdIsMarkedForDeletion as DocInfoRecdIsMarkedForDeletion,
      @ObjectModel.text.association: '_StrucStatusText'
      IndicatorStatus.IsDocInfoRecdStructure         as IsDocInfoRecdStructure,
      @ObjectModel.text.association: '_CadStatusText'
      IndicatorStatus.IsDocInfoRecdCreatedFromCAD    as IsDocInfoRecdCreatedFromCAD,

      --Description
      //@ObjectModel.text.association: '_DeltnStatusText'
      //_DeltnStatusText.DeleteStatusDescription     as DeleteStatusDescription,
      //@ObjectModel.text.association: '_StrucStatusText'
      //_StrucStatusText.DocInfoRecdStrucDescription as DocInfoRecdStrucDescription,
      //@ObjectModel.text.association: '_CadStatusText'
      //_CadStatusText.CADStatusDescription          as CADStatusDescription,
  

      --Association
      _DocType,
      _DocNumber,
      _DocVersion,
      _DocPart,
      _DeltnStatusText,
      _StrucStatusText,
     _CadStatusText
      
}
```
