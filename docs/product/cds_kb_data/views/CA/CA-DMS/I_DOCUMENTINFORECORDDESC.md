---
name: I_DOCUMENTINFORECORDDESC
description: "Documentinforecorddesc"
app_component: CA-DMS
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
# I_DOCUMENTINFORECORDDESC

**Documentinforecorddesc**

| Property | Value |
|---|---|
| App Component | `CA-DMS` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DocumentInfoRecordDocType` | ✓ | |  | `dokar` |  |  |
| `DocumentInfoRecordDocNumber` | ✓ | |  | `doknr` |  |  |
| `DocumentInfoRecordDocVersion` | ✓ | |  | `dokvr` |  |  |
| `DocumentInfoRecordDocPart` | ✓ | |  | `doktl` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `DocumentDescription` |  | |  | `dktxt` |  |  |
| `LongTextExists` |  | |  | `ltxin` |  |  |
| `DocInfoRecdShortText` |  | |  | `dktxt_uc` |  |  |
| `_DocType` | | ✓ | | | | |
| `_DocNumber` | | ✓ | | | | |
| `_DocPart` | | ✓ | | | | |
| `_DocVersion` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocType` | `I_DocumentInfoRecordDocType` | [1..1] |
| `_DocNumber` | `I_DocumentInfoRecordDocNumber` | [0..1] |
| `_DocPart` | `I_DocumentInfoRecordDocPrt` | [0..1] |
| `_DocVersion` | `I_DocumentInfoRecordDocVersion` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName:'ICVDOCDESC'
@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey:'DocumentInfoRecordDocType'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL }
@EndUserText.label: 'Document Info Record Description'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle: {
  contract: {
    type:#PUBLIC_LOCAL_API
  }
}
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
define view I_DocumentInfoRecordDesc
  as select from drat as documentdesc

  --Get Document Type Association
  association [1..1] to I_DocumentInfoRecordDocType    as _DocType    on  $projection.DocumentInfoRecordDocType = _DocType.DocumentInfoRecordDocType

  --Get Document Number Association
  association [0..1] to I_DocumentInfoRecordDocNumber  as _DocNumber  on  $projection.DocumentInfoRecordDocType   = _DocNumber.DocumentInfoRecordDocType
                                                                      and $projection.DocumentInfoRecordDocNumber = _DocNumber.DocumentInfoRecordDocNumber
  --Get Document Part Association
  association [0..1] to I_DocumentInfoRecordDocPrt     as _DocPart    on  $projection.DocumentInfoRecordDocType    = _DocPart.DocumentInfoRecordDocType
                                                                      and $projection.DocumentInfoRecordDocPart    = _DocPart.DocumentInfoRecordDocPart
                                                                      and $projection.DocumentInfoRecordDocNumber  = _DocPart.DocumentInfoRecordDocNumber
                                                                      and $projection.DocumentInfoRecordDocVersion = _DocPart.DocumentInfoRecordDocVersion

  --Get Document Version Association
  association [0..1] to I_DocumentInfoRecordDocVersion as _DocVersion on  $projection.DocumentInfoRecordDocType    = _DocVersion.DocumentInfoRecordDocType
                                                                      and $projection.DocumentInfoRecordDocNumber  = _DocVersion.DocumentInfoRecordDocNumber
                                                                      and $projection.DocumentInfoRecordDocVersion = _DocVersion.DocumentInfoRecordDocVersion

  association [0..1] to I_Language                     as _Language   on  $projection.Language = _Language.Language

{
            @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_DocInfoRecdDocTypeStdVH',
                           element: 'DocumentInfoRecordDocType' }
              }]
            @ObjectModel.foreignKey.association: '_DocType'
  key       documentdesc.dokar    as DocumentInfoRecordDocType,
            
            @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_DocInfoRecdDocNmbrStdVH',
                           element: 'DocumentInfoRecordDocNumber' },
                additionalBinding: [{ localElement: 'DocumentInfoRecordDocType',
                                      element: 'DocumentInfoRecordDocType' }]
              }]
            @ObjectModel.foreignKey.association: '_DocNumber'
  key       documentdesc.doknr    as DocumentInfoRecordDocNumber,
  
            @Consumption.valueHelpDefinition: [ 
              { entity:  { name:    'I_DocInfoRecdDocVersStdVH',
                           element: 'DocumentInfoRecordDocVersion' },
                additionalBinding: [{ localElement: 'DocumentInfoRecordDocType',
                                      element: 'DocumentInfoRecordDocType' },
                                    { localElement: 'DocumentInfoRecordDocNumber',
                                      element: 'DocumentInfoRecordDocNumber' }]
              }]
            @ObjectModel.foreignKey.association: '_DocVersion'
  key       documentdesc.dokvr    as DocumentInfoRecordDocVersion,

            @ObjectModel.foreignKey.association: '_DocPart'
  key       documentdesc.doktl    as DocumentInfoRecordDocPart,

            @Semantics.language: true
            @ObjectModel.foreignKey.association: '_Language'
  key       documentdesc.langu    as Language,

            @Semantics.text: true
            @EndUserText.label:'Document Description'
            documentdesc.dktxt    as DocumentDescription,

            documentdesc.ltxin    as LongTextExists,

            // DMS: short texts in capital letters
            @EndUserText.label:'Document Short Description'
            documentdesc.dktxt_uc as DocInfoRecdShortText,

            // Associations
            @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
            _Language,
            @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
            _DocType,
            _DocVersion,
            _DocPart,
            _DocNumber

}
```
